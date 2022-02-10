const {Libros, Categorias} = require('../db');
const axios = require('axios')

const getAllLibros = async (name) => {
    let librosdbPromise = Libros.findAll({
        include:Categorias,
    })
    let librosApipromise = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+ name);
    librosApipromise = librosApipromise.data.items 
    return Promise.all([
        librosdbPromise,
        librosApipromise,
    ]).then(response => {
        let libroDB = response[0];
        let libroApi = response[1];
        libroApi = libroApi.map(e => {
            return{
                id:e.id,
                name:e.volumeInfo.title,
                autor:e.volumeInfo.authors,
                categorias:e.categories,
                publishedDate:e.volumeInfo.publishedDate,
                publisher:e.volumeInfo.publisher,
                description:e.volumeInfo.description,
                imagen:e.volumeInfo.imageLinks,
            }
        })
        libroDB = libroDB.map(e => {
            return {
                id:e.id,
                name:e.name,
                publishedDate:e.publishedDate, // fecha
                publisher:e.publisher, // editor
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