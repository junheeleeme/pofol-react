"ust strict"

const express = require('express');
const tet = express.Router();
const fs = require("fs");
const path = require('path');
const bodyParser = require('body-parser');                                                                     

tet.use(bodyParser.json());
tet.use(bodyParser.urlencoded({extended : true}));


tet.get('/rank?', (req, res) => {

    fs.readFile(path.join(__dirname, '../public/pofol/tetris/rank.json'), 'utf8', (err, json)=>{

        if(!err){     
            const rankData = JSON.parse(json);
            const last = rankData.length-1;

            if(rankData[last].score < req.query.score){ //10위 점수와 비교
                res.status(200).send("ranker");
            }else{
                res.status(200).send("user");
            }

        }else{
            console.log(err);
        }
    })  
});

tet.get('/readrank', (req, res) => {
    
    fs.readFile(path.join(__dirname, '../public/pofol/tetris/rank.json'), 'utf8', (err, json)=>{
        if(!err){
            res.status(200).send(JSON.parse(json));
        }else{
            res.status(400).send();
            console.log(err);
        }
    });
})

tet.post('/rank', (req, res) => {

    fs.readFile(path.join(__dirname, '../public/pofol/tetris/rank.json'), 'utf8', (err, json)=>{
        if(!err){

            const rankData = JSON.parse(json);        
            rankData.push(req.body);

            rankData.sort((a, b)=>{
                return b.score - a.score;
            });

            if(rankData.length > 4){
                rankData.splice(5, 1);
            }

            fs.writeFile(path.join(__dirname, '../public/pofol/tetris/rank.json'), JSON.stringify(rankData), 'utf8', (err)=>{
                if(err){
                    console.log(err)
                }else{
                    res.status(200).send('ok');
                }
            });
        }
    })
    
});

module.exports = tet;