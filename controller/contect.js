const ContectUs = require('../models/usermodel')
const TripModel = require("../models/join")
const infoModel = require("../models/contect1")

const Contect = async (req,res) => {
    try {
        
      const user = req.body;
      const result = await ContectUs(user);
      const save = result.save()

      if(save) {
        res.redirect('hello')
      } else {
        res.send("Error To Page")
      }

    } catch (error) {
        res.status(500).send("Error...=>",error)
    }
}

const Trip = async (req,res) => {
  try {
    
    const user = req.body;
    const info = await TripModel(user);
    const save = info.save();

    if(save){
      res.redirect('hello')
    }else {
      res.send("Error on Info Log..!!!")
    }
  } catch (error) {
    res.status(500).send("Error trip..=>",error)
  }
}

const Info = async (req,res) => {
  try {
    
    const user = req.body;
    console.log(req.body);
    const newinfo = await infoModel(user);
    const save = newinfo.save();

    if(save){
      res.redirect('hello')
    }else {
      res.send("Error on trip Log..!!!")
    }
  } catch (error) {
    res.status(500).send("Error trip..=>",error)
  }
}


module.exports = {
    Contect,
    Trip,
    Info
}