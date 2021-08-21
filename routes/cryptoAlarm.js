require("dotenv").config({path: './variables.env'});
const axios = require("axios");


const token = process.env.TELEGRAM_TOKEN;
const tel_id = process.env.TELEGRAM_ID;
const upbit_url = 'https://api.upbit.com/v1/ticker?markets=';
const tel_url = `https://api.telegram.org/bot${token}/sendmessage?chat_id=${tel_id}&text=`;
const crypto = "KRW-BTC,KRW-ETH,KRW-ORBS";


const getPrice = async () => { //업비트 시세 조회

    const getPrice_res = await axios(upbit_url+crypto)
                        .then((res) => {return res; })
                        .catch((err) => { return err; });

    return getPrice_res;
}

const sendTel = async (msg) => { //텔레그램 메시지 전송
    
    const sendTel_res = await axios.get(tel_url+encodeURI(msg))
                .then(res => { return res; })
                .catch(err => { return err; });

    return sendTel_res;
}

const nowDate = () => {
    
    const _date = new Date();
    const date = `Date : ${_date.getFullYear()}/${(_date.getMonth()+1)}/${_date.getDate()}/${_date.getHours()}:${_date.getMinutes()}`;

    return date;

}


const sendAlarm = async () => {

    const getPrice_res = await getPrice(); //업비트 시세 조회

    if(getPrice_res.status === 200){ //시세 조회 성공

        const btc = getPrice_res.data[0].trade_price.toLocaleString(); //비트코인
        const eth = getPrice_res.data[1].trade_price.toLocaleString(); //이더리움
        const orbs = getPrice_res.data[2].trade_price.toLocaleString(); //오브스
        
        const msg = `비트코인(₿) : ${btc}원\n이더리움(⧫) : ${eth}원\n오브스(⎔)  :  ${orbs}원`;

        const sendTel_res = await sendTel(msg);

        if(sendTel_res.status === 200){ //메시지 전송 성공
            console.log(`${nowDate()}  - 메세지 전송 성공`);
        }else{                   //메시지 전송 실패
            console.log(`${nowDate()}  - 메세지 전송 실패\n${sendTel_res}`);
        }

    }else{
        await sendTel('업비트 시세 조회 실패'); //실패 메시지 전송
    }
    
}

module.exports = sendAlarm