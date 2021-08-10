import React from 'react'
import styled from 'styled-components';

const RowStyled = styled.div`
margin: 25px 0px; width: 100%; display: inline-grid; position: relative;
grid-template-columns: ${props=> props.columns[0]}% ${props=> props.columns[1]}%;
@media screen and (max-width: 960px){
    grid-template-columns: 100%; margin: 10px auto;
}`

const Row = ({children, columns}) => {

    return(
        <>
            <RowStyled columns={columns} >
                {children}
            </RowStyled>
        </>
    )
}

export default Row;