"use strict"

const express = require("express");
const app = express();
const path = require('path');
const pofol = require('./portfolio.json');
const cors = require('cors')

app.use(cors());

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, './index.html'));
    console.log(req.header)    
    res.json(pofol);
})

// app.get('/about', (req, res) => { res.sendFile(path.join(__dirname, './build/index.html')); });
// app.get('/skill', (req, res) => { res.sendFile(path.join(__dirname, './build/index.html')); });
// app.get('/portfolio', (req, res) => { res.sendFile(path.join(__dirname, './build/index.html')); });
// app.get('/contact', (req, res) => { res.sendFile(path.join(__dirname, './build/index.html')); });


app.listen(8080, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connect success!");
    }
})