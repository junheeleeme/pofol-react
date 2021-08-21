const express = require('express');
const path = require('path');
const router = require("./routes/router");
const srb = require('./routes/srb');
const tet = require('./routes/tetris');
const web = express();
const port = process.env.PORT || 8080;

//Telegram alarm
const sendAlarm = require("./routes/cryptoAlarm.js");
const cron = require('node-cron');

const mongoose = require("mongoose");
require("dotenv").config({path: 'variables.env'});
const mongo_uri = process.env.MONGODB_URI;
// const cors = require("cors");
// web.use(cors());

// TeleGram Bot
cron.schedule('0 */2 * * *', ()=> { //매일 2시간 씩
    sendAlarm();
});

// express 정적 파일 제공
web.use(express.static(path.join(__dirname, '/')));
web.use(express.static(path.join(__dirname, '/build')));
web.use(express.static(path.join(__dirname, '/pofol')));


web.get('/', router);
web.get('/about', router);
web.get('/skill', router);
web.get('/portfolio', router);
web.get('/portfolio/:id', router);
web.get('/contact', router);
web.get('/tetris', router);
web.get('/starbucks', router);
web.get('/dekser', router);
web.get('/todo', router);
web.get('/todo-hooks', router);
web.get('/simple-react-board', router);
web.get('/simple-react-board/list', router);
web.get('/simple-react-board/post', router);


// Simple-React-Board : CRUD요청
web.post('/post', srb); //게시글 id 조회
web.get('/post/list', srb); //게시글 목록 요청
web.post('/post/write/new', srb); //게시글 작성
web.post('/post/usercheck?:id', srb); //본인 게시글 인증
web.delete('/post/delete?:id', srb); //게시글 삭제
web.post('/post/update?:id', srb); //게시글 업데이트

// tetris : 랭킹기능
web.get('/rank?', tet); // 랭킹 순위권 체크
web.get('/readrank', tet); // 전체 랭킹 불러오기
web.post('/rank', tet); // 랭킹 저장

web.listen(port, (err) => {
    if(err){
        console.log('Express App on port ' + port + '!');
    }else{
        mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Connected to DB success!");
            }
        });
        console.log("success!");
    }
});


module.exports = web;

