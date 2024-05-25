const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Agent', {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg'
      },
    });
};