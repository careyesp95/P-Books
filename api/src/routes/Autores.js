const express = require('express');
const {Autores} = require('../db');

const app = express.Router()


app.get('/autores', (_req,res, next) => {
    Autores.findAll()
    .then(response => {
        return res.json(response)
    })
    .catch((error) => {
        next(error)
    })
})



module.exports = app;