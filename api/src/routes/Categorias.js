const express = require('express');
const {Categorias} = require('../db');

const app = express.Router()


app.get('/categoria', (_req,res, next) => {
    Categorias.findAll()
    .then(response => {
        return res.json(response)
    })
    .catch((error) => {
        next(error)
    })
})

// app.post('/categoriaCreate', async (req,res, next) => {
//     try{
//         const {name} = req.body;
//         let categoriaCreate = await Diet.findOrCreate({where:{name}})
//         res.json(categoriaCreate)
        
//     }catch(err){
//         next(err)
//     }
// })

module.exports = app;