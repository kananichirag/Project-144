const express = require('express')
const IndexRoute = express.Router();
const ContectController = require("../controller/contect")

IndexRoute.post('/contect',ContectController.Contect)
IndexRoute.post('/join',ContectController.Trip)
IndexRoute.post('/info',ContectController.Info)



module.exports = IndexRoute;