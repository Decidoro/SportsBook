const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Inventory = require('./models/product');

mongoose.set("strictQuery", false);
//this code connects the application to a data server
mongoose.connect('mongodb://localhost:27017/sportApp', {UseNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        console.log('SUCCESS, CONNECTED TO SPORTS MONGO!')
    })
    .catch(err =>{
        console.log("CONNECTION ERROR!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));

app.get('/home', async(req, res) =>{
    const products = await Inventory.find({})
    //console.log(products)
    res.render('products/home', {products})
})

app.listen(3000, ()=>{
    console.log('LSTENING ON PORT: 3000!');
})