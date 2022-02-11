const express = require('express');
const {Libros, Categorias, Autores} = require('../db');
const {getAllLibros} = require('../controllers');
const axios = require('axios');


const app = express.Router()

app.get('/libro-name', async (req,res,next) => {
    let {name} = req.query;
    if(!name) name = 'harry potter';
    try{
        let getlibro = await getAllLibros(name);
        if(name){
            let libroFilter = await getlibro.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            libroFilter.length > 0 ?
            res.status(200).json(libroFilter):
            res.status(404).send({message:'No esta el libro seleccionado' + ' ' + name})
        }else {
            res.status(200).json(getlibro);
        } 
    }catch(err){
        next(err)
    }
})

app.get('/libro/:id', async (req,res,next) => {
    try{
        const {id} = req.params;
        if(!id) return next({mesagge:'No ingresaste un id correcto'})
        if(typeof id === 'string' && id.length > 20){
            let findById = await Libros.findByPk(id, {
                include:Categorias
            });
            return res.json(findById)
        }else {
            
            let getByIdApi = await axios.get('https://www.googleapis.com/books/v1/volumes/' + id)
            let findByIdAPI = {
                id:getByIdApi.data.id,
                name:getByIdApi.data.volumeInfo.title,
                autor:getByIdApi.data.volumeInfo.authors,
                categorias:getByIdApi.data.volumeInfo.categories,
                publishedDate:getByIdApi.data.volumeInfo.publishedDate,
                publisher:getByIdApi.data.volumeInfo.publisher,
                description:getByIdApi.data.volumeInfo.description,
                imagen:getByIdApi.data.volumeInfo.imageLinks,
            }
            return res.status(200).json(findByIdAPI);
        }
    }catch(err){
        next(err)
    }
})



app.post('/crear/libro', async (req,res, next) => {
    try{
        const imageDefault = 'https://dlprivateserver.com/wp-content/uploads/2020/09/1599056683_6-cosas-que-debes-saber-antes-de-comprar-Marvel39s-Avengers-780x470.jpg';
        
            let {name,image, description, publishedDate, publisher, categorias, autores } = req.body;

            if(!image) image = imageDefault;
            if(!name || !description || !publishedDate || !publisher) return res.json({message:'Los campos son requeridos, por favor ingresar los datos completos...'})
            let libro = await Libros.create({
                name,
                image,
                description,
                publisher,
                publishedDate,
                
            });
            let categoria = await Categorias.findAll({where: {name:categorias}})
            await libro.addCategorias(categoria)
            let autor = await Autores.findAll({where:{name:autores}})
            await libro.addAutores(autor)
    
            res.status(200).send(categoria)
    }catch(err){
        next(err)
    }

})


module.exports = app;