import React from 'react'
import styled from 'styled-components';

const WrapStyled = styled.div`
    position: relative; width: 100%; margin-bottom: 70px; padding: 10px 0; text-align: center;
    &:after{ content: ''; position: absolute; bottom: -35px; left: 50%; transform: translate(-50%, 0); width: 30%; height: 1px; 
    background: ${props=> props.theme.colors.textColor}; z-index: 10;
    @media screen and (max-width: 767px){ bottom: -25px; } }
    &:before{ content: ''; position: absolute; bottom: -45px; left: 50%; transform: translate(-50%, 0) rotate(45deg); width: 20px; height: 20px; 
    border: 1px solid ${props=> props.theme.colors.textColor}; background: ${props=> props.theme.colors.bg2Color}; z-index: 11; 
    @media screen and (max-width: 767px){  width: 14px; height: 14px; bottom: -32px; } }
    @media screen and (max-width: 767px){ margin-bottom: 50px; }
    `

const H3TitleStyled = styled.h2`
font-size: 27px; color: ${props=> props.theme.colors.textColor};
`

const H3Title = ({children}) => {
    return(
        <>
            <WrapStyled>
                <H3TitleStyled>{children}</H3TitleStyled>
            </WrapStyled>
        </>
    )
}

export default H3Title;