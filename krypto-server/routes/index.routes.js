var express = require('express');
var router = express.Router();
const controller = require("../controllers/auth.controller");

router.get('/getdata', 
  controller.getdata
);
module.exports = router;
