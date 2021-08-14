import React from 'react'
import styled from 'styled-components';

const ArticleStyled = styled.article`
position: relative; width: 350px; height: 230px;
@media screen and (max-width: 960px){ width: 500px; height: 300px; }
@media screen and (max-width: 768px){ width: 88%; height: auto; }`

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