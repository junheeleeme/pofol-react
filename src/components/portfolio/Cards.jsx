import React from 'react'
import styled from 'styled-components';

const ArticleStyled = styled.article`
position: relative; width: 350px; height: 230px;
@media screen and (max-width: 960px){ width: 500px; height: 330px; }
@media screen and (max-width: 768px){ width: 300px; height: 200px; }`

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