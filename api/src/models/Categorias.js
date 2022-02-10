const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('categorias',{
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        }
    },
    {
        timestamps:false,
    })
} 