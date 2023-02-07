const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Randomizer: sequelize.define('randomizer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
    })
}