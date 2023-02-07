const { Legends } = require("../models/legends");
module.exports = {
  getAllLegends: async (req, res) => {
    try {
      const legends = await Legends.findAll();
      res.status(200).send(legends);
    } catch (error) {
      console.log("ERROR in getAllLegends");
      console.log(error);
      res.sendStatus(400);
    }
  },


  addLegend: async (req, res) => {
    try {
      const {
        name,
        class_name,
        imgURL,
        passive_name,
        passive_description,
        tactical_name,
        tactical_description,
        ultimate_name,
        ultimate_description,
      } = req.body;
      await Legends.create({
        name,
        class_name,
        imgURL,
        passive_name,
        passive_description,
        tactical_name,
        tactical_description,
        ultimate_name,
        ultimate_description,
      });
      res.sendStatus(200);
    } catch (error) {
      console.log("error occured in addLegend function");
      console.log(error);
      res.status(400).send("Failed to create Legend");
    }
  },

  getLegend: async (req, res) => {
    try {
      const { id } = req.params;
      const legend = await Legends.findOne({
        where: { id },
      });
      res.status(200).send(legend);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  },
};
