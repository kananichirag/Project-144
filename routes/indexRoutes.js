const express = require('express')
const IndexRoute = express.Router();
const ContectController = require("../controller/contect")

IndexRoute.post('/contect',ContectController.Contect)



module.exports = IndexRoute;