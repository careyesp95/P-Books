const server = require('./src/app.js');
const { conn, Categorias, Autores } = require('./src/db.js');


// precargaro la base de datos con los tipos de categorias de los libros
let categorias = ['Acción','Aventuras','Ciencia Ficción','Comedia','Drama','Terror','Fantasía','Musical','Suspenso','Animada']
let autores = ['Carlos Andres','Miguel Servantes']

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    categorias.forEach(async (elem) => {
      await Categorias.findOrCreate({where:{name:elem}})
    })
    autores.forEach(async (e) => {
      await Autores.findOrCreate({where:{name:e}})
    })
    console.log('listen 3001')
  });
});
