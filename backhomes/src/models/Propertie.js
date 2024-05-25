const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Propertie', {
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
      zone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
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
      houseType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['rent', 'purchase', 'rent_and_purchase']]
        }
      },
    });
};