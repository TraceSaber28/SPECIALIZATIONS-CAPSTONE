const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Legends: sequelize.define('legends', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        // randomizerId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        class_name: DataTypes.STRING,
        imgURL: DataTypes.STRING,
        passive_name: DataTypes.STRING,
        passive_description: DataTypes.STRING,
        tactical_name: DataTypes.STRING,
        tactical_description: DataTypes.STRING,
        ultimate_name: DataTypes.STRING,
        ultimate_description: DataTypes.STRING,
    })
}