import React from 'react'
import styled from 'styled-components';

const ContainerStyled = styled.section`
    padding: 40px 0;
    @media screen and (max-width: 768px) { padding: 30px 0; }
`

const Container = ({children}) => {

    return( //Main -> Container -> {children}
        <>
            <ContainerStyled>
                {children}
            </ContainerStyled>
        </>
    )
}

export default Container;