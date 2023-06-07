const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const City = sequelize.define('city', {
    campo1: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = City;