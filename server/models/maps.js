const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Maps: sequelize.define('maps', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        imgURL: DataTypes.STRING,
    })
}