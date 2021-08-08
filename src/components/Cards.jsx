import React from 'react'
import styled from 'styled-components';

const ArticleStyled = styled.article`
border: 1px solid #000; width: 350px; height: 230px;`

const Cards = ({children}) => {
    return(
        <>
            <ArticleStyled>
                {children}
            </ArticleStyled>
        </>
    )
}

export default Cards;