"use strict"

const express = require("express");
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './build/')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})


app.listen(8080, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connect success!");
    }
})