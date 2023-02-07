require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = process.env;

const { register, login } = require("./controllers/auth");
const {isAuthenticated} = require("./middleware/isAuthenticated")
const {sequelize} = require('./util/database')
const { seedDatabase } = require( "./util/seed")
const {getAllLegends, addLegend, getLegend} = require('./controllers/legends')
const {getAllWeapons, addWeapon} = require('./controllers/weapons')
const {getAllMaps, addMap} = require('./controllers/maps')
const {getRandomLoadout} = require('./controllers/randomizer')
const {Legends} = require('./models/legends')
const {Weapons} = require('./models/weapons')
const {Randomizer} = require('./models/randomizer')




const app = express()
app.use(express.json())
app.use(cors())


app.post("/register", register)
app.post("/login", login)
app.get("/legends", getAllLegends)
app.post("/legends", addLegend)
app.get("/maps", getAllMaps)
app.post("/maps", addMap)
app.get("/weapons", getAllWeapons)
app.post("/weapons", addWeapon)
app.get("/randomizer", getRandomLoadout)
app.get("/legend/:id", getLegend)

Legends.hasOne(Randomizer)
// Weapons.hasMany(Randomizer)
Randomizer.belongsTo(Legends)
Randomizer.belongsTo(Weapons, {as:'weaponOne'})
Randomizer.belongsTo(Weapons, {as:'weaponTwo'})


// sequelize.sync({force: true}).then(() => seedDatabase())
sequelize.sync()
.then(() => {
    app.listen(SERVER_PORT, () => console.log(`server running on port ${SERVER_PORT}`))
})
.catch(err => console.log(err))