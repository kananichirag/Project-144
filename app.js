const express = require('express');
const path = require("path")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config({path:path.join(__dirname,"./config/.env")})
const IndexRoutes = require('./routes/indexRoutes');

app.set('view engine',"ejs");
app.set('views',path.resolve("./views"));
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(IndexRoutes);

app.get('/',(req,res) => {
    res.render('home');
})

app.get('/home',(req,res) => {
    res.render('home');
})

app.get('/hello',(req,res) => {
    res.render('hello');
})



mongoose.connect(process.env.MONGO_URL).then((e) => console.log("Mongodb Connected..!!")).catch((err) => {
    console.log("Error-->",err)
})

app.listen(process.env.PORT, () => console.log("Server Started...!!!!"))