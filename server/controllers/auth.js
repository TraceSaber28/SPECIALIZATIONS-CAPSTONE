require("dotenv").config();
const { SECRET } = process.env;
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (email, id) => {
  return jwt.sign(
    {
      email,
      id,
    },
    SECRET,
    {
      expiresIn: "1 Hour",
    }
  );
};

module.exports = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({
        where: { email },
      });
      if (foundUser) {
        res.status(400).send("Email already taken");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await User.create({
          email,
          hashedPass: hash,
        });
        const token = createToken(
          newUser.dataValues.email,
          newUser.dataValues.id
        );
        const exp = Date.now() + 1000 * 60 * 60;
        res.status(200).send({
          email: newUser.dataValues.email,
          userId: newUser.dataValues.id,
          token,
          exp,
        });
      }
    } catch (error) {
      console.log("Error happend in the register function in auth.js");
      console.log(error);
      res.sendStatus(400);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundUser = await User.findOne({
        where: { email },
      });
      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.hashedPass
        );
        if (isAuthenticated) {
          const token = createToken(
            foundUser.dataValues.email,
            foundUser.dataValues.id
          );
          const exp = Date.now() + 1000 * 60 * 60;
          res.status(200).send({
            email: foundUser.dataValues.email,
            userId: foundUser.dataValues.id,
            token,
            exp,
          });
        } else {
          res.status(400).send("Error in the login function in auth.js");
        }
      }
    } catch (error) {
      console.log("Error in the login function");
      console.log(error);
      res.sendStatus(400);
    }
  },
};
