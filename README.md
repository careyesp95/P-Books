# Project - Books


## Objetivos del Proyecto

- Construir una App de libros con el fin de buscar, crear y filtar libros de interes.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

#### Tecnologías necesarias:
- [ ] ReactJs
- [ ] Redux
- [ ] Express
- [ ] NodeJs
- [ ] ORM: Sequelize
- [ ] DB: Postgres

## Comenzando

 1. Clonar el repositorio.
 - git https://github.com/careyesp95/P-Books.git
 
 2. En `api` crear un archivo llamado: `.env` que tenga la siguiente forma: 
 
```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
DB_NAME=books    
```


Reemplazar `usuariodepostgres` y `passwordDePostgres` con sus propias credenciales para conectarte a postgres. 

Adicionalmente será necesario que creen desde psql una base de datos llamada `books`

 3. instalar las dependencias en `api` y `client` utlilizando `npm i` y para levantar la APP `npm start`
 

### API Externa

  * Google Books API

#### Frontend

Se desarrolla la interfaz de la APP con herramientas como: ReactJs junto con Redux.

#### Backend

Se desarrolla un servidor en NodeJs junto con Express.


#### Base de datos

El modelo de la base de datos deberá tener las siguientes entidades:

- [ ] Books con las siguientes propiedades:
  - ID: 
  - Titulo 
  - Subtitulo 
  - Autor(es)
  - Categoria(s)
  - Fecha de publicacion
  - Editor
  - Descripción
  - Imagen
  
  #### Nota: 
   - Por experiencia algunos atributos como * Descripción
   se pueden observar al darle click en la portada de cada libro.



