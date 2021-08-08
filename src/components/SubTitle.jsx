import React from 'react'
import styled from 'styled-components';

const WrapStyled = styled.div`
    width: 100%; margin-bottom: 30px;
`
const SubTitleStyled = styled.h2`
    position: relative; font-size: 35px; color: ${props=> props.theme.colors.textColor};
    transition: color ${props=> props.theme.colors.trans};
    &:after{
        content: '';
        position: absolute; bottom: -3px; left: -3px;
        width: 90px; height: 1px; background: ${props=> props.theme.colors.textColor};
    }
`

const SubTitle = ({children}) => {
    
    return(
        <>
            <WrapStyled>
                <SubTitleStyled>
                    {children}
                </SubTitleStyled>
            </WrapStyled>
        </>
    )
}

export default SubTitle;