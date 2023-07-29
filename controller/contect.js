const ContectUs = require('../models/usermodel')
const ejs = require('ejs')

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


module.exports = {
    Contect
}