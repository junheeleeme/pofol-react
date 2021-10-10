import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router'


const BackBtnWrapStyled = styled.div`
position: absolute; top: 40px; right: 30px; width: 50px; height: 50px; padding: 0px; cursor: pointer; 
z-index: 9990; background: rgba(${props=> props.theme.colors.textColorRGB}, 0.35); border-radius: 50%;
@media screen and (max-width: 768px) { position: fixed; top: auto; bottom: 30px; right: 20px; }
`
const SpanStyled = styled.span`
position: absolute; top: 50%; left: 12px; transform: translate(0, -50%); opacity: 1;
width: 30px; height: 7px; background: ${props=> props.theme.colors.bgColor};
&:after{ content: ''; position: absolute; top: -5px; left: -6px; transform: rotate(-45deg); width: 20px; height: 6px; background: ${props=> props.theme.colors.bgColor}; }
&:before{ content: ''; position: absolute; top: 5px; left: -6px; transform: rotate(45deg); width: 20px; height: 6px; background: ${props=> props.theme.colors.bgColor}; }
`

const BackButton = () => {

    const his = useHistory();

    const hisBack = () => {
        his.push('/portfolio');
    };


    return(
        <>
                <BackBtnWrapStyled onClick={hisBack}><SpanStyled/></BackBtnWrapStyled>
        </>
    )
}

export default BackButton;