const { Randomizer } = require("../models/randomizer");
const { Legends } = require("../models/legends");
const { Weapons } = require("../models/weapons");


module.exports = {
  getRandomLoadout: async (req, res) => {
    let randomLegendIndex = Math.floor(Math.random() * await Legends.count());
    let randomWeapon1Index = Math.floor(Math.random() * await Weapons.count());
    let randomWeapon2Index = Math.floor(Math.random() * await Weapons.count());
    try {
        await Randomizer.create({legendId: randomLegendIndex,
        weaponOneId: randomWeapon1Index, weaponTwoId: randomWeapon2Index, weaponTwoId: randomWeapon2Index})
      const loadout = await Randomizer.findAll({
        where: { legendId: randomLegendIndex, weaponOneId: randomWeapon1Index,  },
        include: [{
            model: Legends,
            required: true,
            attributes: ['name', 'class_name', 'imgURL']
        }, {
            model: Weapons,
            as: 'weaponOne'
        }, {
            model: Weapons,
            as: 'weaponTwo'
        }],
    
      });
      res.status(200).send(loadout);

    } catch (error) {
      console.log("ERROR in getRandomLegend");
      console.log(error);
      res.sendStatus(400);
    }
  },
};
