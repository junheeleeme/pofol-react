import React from 'react'
import styled from 'styled-components'

const WrapStyled = styled.div`
position: absolute; top: 0; right: 0; width: 400px; height: 100%;
@media screen and (max-width: 960px){ right: auto; left: 0; }`
const HAlphabet = styled.div`
display: inline-block; position: absolute; width: 170px; height: 200px; border-left: 45px solid #0F52BA; border-right: 45px solid #0F52BA;
&:after{ content: ''; position: absolute; top: 50%; left: 0; width: 100%; height: 45px; transform: translate(0, -50%);
background: #0F52BA; }

top: -300px; right: 180px; transform: rotate(-18deg);
animation: HAlpabetEffect 1s 1s ease-in forwards;

@keyframes HAlpabetEffect{
    0%{ top: -300px; right: 180px; transform: rotate(-12deg); }
    80%{ top: calc(100vh - 298px); right: 180px; transform: rotate(-12deg); }
    90%{ top: calc(100vh - 294px); right: 135px; transform: rotate(8deg); }
    95%{ top: calc(100vh - 290px); right: 150px; transform: rotate(-6deg); }
    100%{ top: calc(100vh - 280px); right: 145px; transform: rotate(0deg); }
}
`
const IAlphabet = styled.div`
position: absolute; display: inline-block; width: 40px;  height: 200px; background: #0F52BA;
&:after{ content: ''; position: absolute; top: 0; left: 50%; width: 80px; height: 35px; transform: translate(-50%, 0); background: #0F52BA; }
&:before{ content: ''; position: absolute; bottom: 0; left: 50%; width: 80px; height: 35px; transform: translate(-50%, 0); background: #0F52BA; }

top: -300px; right: -200px; transform: rotate(-10deg);
animation: IAlpabetEffect 1s 1s ease-in forwards;

@keyframes IAlpabetEffect{
    0%{ top: -300px; right: 60px; }
    70%{ top: calc(100vh - 287px); right: 60px; transform: rotate(-10deg); }
    75%{ top: calc(100vh - 295px); right: 27px; transform: rotate(5deg); }
    80%{ top: calc(100vh - 288px); right: 53px; transform: rotate(-5deg); }
    85%{ top: calc(100vh - 284px); right: 45px; transform: rotate(5deg); }
    90%{ top: calc(100vh - 282px); right: 53px; transform: rotate(-3deg); }
    95%{ top: calc(100vh - 284px); right: 52px; transform: rotate(-2deg); }
    100%{ top: calc(100vh - 280px); right: 53px; transform: rotate(0deg); }
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