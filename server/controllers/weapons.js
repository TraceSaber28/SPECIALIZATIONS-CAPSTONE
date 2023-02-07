const { Weapons } = require("../models/weapons");
module.exports = {
  getAllWeapons: async (req, res) => {
    try {
      const weapons = await Weapons.findAll();
      res.status(200).send(weapons);
    } catch (error) {
      console.log("ERROR in getAllWeapons");
      console.log(error);
      res.sendStatus(400);
    }
  },
  addWeapon: async (req, res) => {
    try {
      const {
        name,
        ammoType,
        imgURL,
      } = req.body;
      await Weapons.create({
        name,
        ammoType,
        imgURL,
      });
      res.sendStatus(200);
    } catch (error) {
      console.log("error occured in addWeapon function");
      console.log(error);
      res.status(400).send("Failed to create Weapon");
    }
  },
};
