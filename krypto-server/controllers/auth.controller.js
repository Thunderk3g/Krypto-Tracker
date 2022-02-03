const config = require("../config/auth.config");
const db = require("../models/");
const User = db.user;
const Role = db.role;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const axios = require('axios');
const headers = {
  "x-access-token":
    "coinranking364e1de9aee4e6296b82b66b4d7d53f44ccdab4df5e455f2",
};

exports.signup = (req, res) => {
  const user = new User({
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    password: bcrypt.hashSync(req.body.password)
  });

  user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "User was registered successfully!" });
  });
};

exports.signin =  (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid =  bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      res.status(200).send({
        id: user._id,
        email: user.email,
        accessToken: token
      });
    });
};

exports.getdata = async function (req, res, next) {
  axios
    .get("https://api.coinranking.com/v2/coins", { headers })
    .then(async function (response) {
      var user = response.data;
      console.log(user);
      res.send(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};
