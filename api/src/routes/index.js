const { Router } = require('express');
const categoriasRouter = require('./Categorias');
const librosRouter = require('./Libros');
const autoresRouter = require('./Autores');


const router = Router();


router.use('/api', categoriasRouter)
router.use('/api', librosRouter)
router.use('/api', autoresRouter)

module.exports = router;
