const { Maps } = require("../models/maps");
module.exports = {
  getAllMaps: async (req, res) => {
    try {
      const maps = await Maps.findAll({
        attributes: {exclude: ['id']}
      });
      console.log(maps)
      res.status(200).send(maps);
    } catch (error) {
      console.log("ERROR in getAllMaps");
      console.log(error);
      res.sendStatus(400);
    }
  },
  addMap: async (req, res) => {
    try {
      const {
        name,
        imgURL,
      } = req.body;
      await Maps.create({
        name,
        imgURL,
      });
      res.sendStatus(200);
    } catch (error) {
      console.log("error occured in addMap function");
      console.log(error);
      res.status(400).send("Failed to create Map");
    }
  },
};
