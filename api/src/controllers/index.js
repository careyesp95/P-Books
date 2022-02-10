const {Libros, Categorias} = require('../db');
const axios = require('axios')

const getAllLibros = (name) => {
    let librosdbPromise = Libros.findAll({
        include:Categorias,
    })
    if(!name){
        name = 'harry potter'
    }
    let librosApipromise = axios.get('https://www.googleapis.com/books/v1/volumes?q=name') 

    return Promise.all([
        librosdbPromise,
        librosApipromise
    ]).then(response => {
        let libroDB = response[0];
        let libroApi = response[1].data;
        libroApi = libroApi.map(e => {
            return{
                id:e.items.id,
                name:e.items.title,
                autor:e.items.authors,
                categorias:e.items.categories,
                publishedDate:e.items.publishedDate,
                publisherr:e.items.publisher,
                description:e.items.description,
                imagen:e.items.imageLinks.thumbnail
            }
        })
        libroDB = libroDB.map(e => {
            return {
                id:e.id,
                name:e.name,
                fecha:e.publishedDate,
                editor:e.publisher,
                image:e.image,
                description:e.description,
                categorias:e.categorias.map(e => {
                    return{
                        id:e.id,
                        name:e.name,
                    }
                }),
                autores:e.autores.map(e => {
                    return{
                        id:e.id,
                        name:e.name,
                    }
                }),
            }
        })
        let alllibros = [...libroDB,...libroApi]
        if(alllibros) return alllibros;
    }) 
}

module.exports = {
    getAllLibros,
}