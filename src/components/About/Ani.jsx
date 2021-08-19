import React from 'react'
import styled from 'styled-components'

const WrapStyled = styled.div`
position: absolute; top: 0; right: 0; width: 400px; height: 100%; z-index: 1;
@media screen and (max-width: 960px){ height: 400px; right: 30px;  }
@media screen and (max-width: 767px){ height: 450px; }
@media screen and (max-width: 480px){ 
    height: 400px; right: auto; left: -120px;
    transform: scale(0.5);
}`
const HAlphabet = styled.div`
display: inline-block; position: absolute; width: 170px; height: 200px; border-left: 45px solid #0F52BA; border-right: 45px solid #0F52BA;
&:after{ content: ''; position: absolute; top: 50%; left: 0; width: 100%; height: 45px; transform: translate(0, -50%);
background: #0F52BA; }

bottom: 110vh; right: 180px; transform: rotate(-18deg);
animation: HAlpabetEffect 0.9s 1s ease-in forwards;
@media screen and (max-width: 960px) { animation: HAlpabetEffect 1.3s 1s ease-in forwards; } 
@keyframes HAlpabetEffect{
    0%{ bottom: calc(100vh + 200px); right: 180px; transform: rotate(-12deg); }
    60%{ bottom: 23px; right: 180px; transform: rotate(-20deg); }
    70%{ bottom: 35px; right: 135px; transform: rotate(8deg);  }
    75%{ bottom: 13px; right: 170px; transform: rotate(-8deg); }
    80% { bottom: 10px; right: 158px; transform: rotate(6deg); }
    90% { bottom: 11px; right: 162px; transform: rotate(-7deg);  }
    100%{ bottom: 0px; right: 163px; transform: rotate(0deg); }
}`
const IAlphabet = styled.div`
position: absolute; display: inline-block; width: 40px;  height: 200px; background: #0F52BA;
&:after{ content: ''; position: absolute; top: 0; left: 50%; width: 80px; height: 35px; transform: translate(-50%, 0); background: #0F52BA; }
&:before{ content: ''; position: absolute; bottom: 0; left: 50%; width: 80px; height: 35px; transform: translate(-50%, 0); background: #0F52BA; }

bottom: 110vh; right: -200px; transform: rotate(-10deg);
animation: IAlpabetEffect 0.9s 1s ease-in forwards;
@media screen and (max-width: 960px) { animation: IAlpabetEffect 1.3s 1s ease-in forwards; } 
@keyframes IAlpabetEffect{
    0%{ bottom: calc(100vh + 200px); right: 60px; }
    60%{ bottom: 7px; right: 60px; transform: rotate(-10deg); }
    65%{ bottom: 35px; right: 29px; transform: rotate(5deg); }
    70%{ bottom: 5px; right: 53px; transform: rotate(-5deg); }
    75%{ bottom: 5px; right: 45px; transform: rotate(5deg); }
    80%{ bottom: 4px; right: 53px; transform: rotate(-3deg); }
    85%{ bottom: 3px; right: 52px; transform: rotate(-2deg); }
    90%{ bottom: 2px; right: 52px; transform: rotate(2deg); }
    95%{ bottom: 2px; right: 52px; transform: rotate(-1deg); }
    100%{ bottom: 0px; right: 53px; transform: rotate(0deg); }
}
`

const Ani = () => {
    
    return(
        <>
            <WrapStyled>
                <HAlphabet/>
                <IAlphabet/>
            </WrapStyled>
        </>
    )
}

export default Ani;