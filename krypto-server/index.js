
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const request = require('request');
const cors = require("cors");
const app = express();
const axios = require('axios');
const { response } = require("express");
const { url } = require("inspector");
var corsOptions = {
  origin: "http://localhost:4200"
  
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to COINSRANKING-API Connector" });
});
app.use(cors(corsOptions))




const options = {
    url: 'https://api.coinranking.com/v2/coins',
    method: 'GET',
    headers: {
        'x-access-token': 'coinranking364e1de9aee4e6296b82b66b4d7d53f44ccdab4df5e455f2'
    }
  };
app.get('/getdata',(req,res)=>{
    axios(options)
    .then(async function(response){
        var user = response.data;
        console.log(user);
        res.send(response.data)
      })
      .catch(error => {
        console.error(error)
      })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});