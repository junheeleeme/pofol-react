require("dotenv").config({path: './variables.env'});
const axios = require("axios");


const token = process.env.TELEGRAM_TOKEN;
const tel_id = process.env.TELEGRAM_ID;
//upbit
const upbit_url = 'https://api.upbit.com/v1/ticker?markets=';
const tel_url = `https://api.telegram.org/bot${token}/sendmessage?chat_id=${tel_id}&text=`;
const crypto = "KRW-BTC,KRW-ETH,KRW-ORBS,KRW-XRP";
//bithumb
const bithumb_url = 'https://api.bithumb.com/public/candlestick/KLAY_KRW/1m';


const getUpbit_Price = async () => { //업비트 시세 조회

    const getPrice_res = await axios(upbit_url+crypto)
                        .then((res) => {return res; })
                        .catch((err) => { return err; });

    return getPrice_res;
}

const getBithumb_Price = async () => {

    const getPrice_res = await axios(bithumb_url)
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

    const upbit_res = await getUpbit_Price(); //업비트 시세 조회
    const bithumb_res = await getBithumb_Price();

    if(upbit_res.status === 200 && bithumb_res.data.status === '0000'){ //시세 조회 성공
        //업비트
        const btc = upbit_res.data[0].trade_price.toLocaleString(); //비트코인
        const eth = upbit_res.data[1].trade_price.toLocaleString(); //이더리움
        const orbs = upbit_res.data[2].trade_price.toLocaleString(); //오브스
        const xrp = upbit_res.data[3].trade_price.toLocaleString(); //리플
        //빗썸
        const klayKrw = bithumb_res.data.data[1499][2].toLocaleString(); //클레이튼
        
        const msg = `₿ : ${btc}원\n♦︎ : ${eth}원\n⎔ : ${orbs}원\nXRP : ${xrp}\nKlay : ${klayKrw}`;

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