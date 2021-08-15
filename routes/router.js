"use strict";

const express = require("express");
const router = express.Router();
const path = require("path");
const pofol = require("../portfolio.json");


router.get('/', (req, res) => { res.sendFile(path.join(__dirname, '../build/index.html')); });
router.get('/about', (req, res) => { res.sendFile(path.join(__dirname, '../build/index.html')); });
router.get('/skill', (req, res) => { res.sendFile(path.join(__dirname, '../build/index.html')); });
router.get('/portfolio', (req, res) => { res.sendFile(path.join(__dirname, '../build/index.html')); });
router.get('/portfolio/:id', (req, res) => { res.sendFile(path.join(__dirname, '../build/index.html')); });
router.get('/contact', (req, res) => { res.sendFile(path.join(__dirname, '../build/index.html')); });

router.get('/pofofllist', (req, res) => {
    res.json(pofol);
});

router.get('/tetris', (req, res) => {
    res.sendFile(path.join(__dirname, '../pofol/tetris/tetris.html')); 
});
router.get('/starbucks', (req, res) => {
    res.sendFile(path.join(__dirname, '../pofol/starbucks/index.html')); 
});
router.get('/desker', (req, res) => {
    res.sendFile(path.join(__dirname, '../pofol/desker/index.html')); 
});

router.get('/todo-hooks', (req, res) => {
    res.sendFile(path.join(__dirname, '../pofol/todo-hooks/dist/index.html')); 
});

router.get('/simple-react-board', (req, res) => {
    res.sendFile(path.join(__dirname, '../pofol/simple-react-board/index.html')); 
});
router.get('/simple-react-board/list', (req, res) => {
    res.sendFile(path.join(__dirname, '../pofol/simple-react-board/index.html')); 
});
router.get('/simple-react-board/post', (req, res) => {
    res.sendFile(path.join(__dirname, '../pofol/simple-react-board/index.html')); 
});



module.exports = router;