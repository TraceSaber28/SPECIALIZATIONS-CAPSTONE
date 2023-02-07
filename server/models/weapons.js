const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Weapons: sequelize.define('weapons', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        // randomizerId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        ammoType: DataTypes.STRING,
        imgURL: DataTypes.STRING,
    })
}