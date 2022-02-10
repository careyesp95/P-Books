const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('libros', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
    },
    
    description:{// descripción de la pelicula
      type: DataTypes.TEXT,
      allowNull:false,
    },
    publishedDate:{ 
      type: DataTypes.NUMBER
    },
    publisher:{
      type: DataTypes.STRING,
    }

  },{timestamps:false});
};