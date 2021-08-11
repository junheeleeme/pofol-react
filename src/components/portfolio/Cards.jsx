import React from 'react'
import styled from 'styled-components';

const ArticleStyled = styled.article`
position: relative; width: 350px; height: 230px;`

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