import React from 'react'
import styled from 'styled-components';

const RowStyled = styled.div`
padding: 30px 5px; width: 100%; display: inline-grid; position: relative;
grid-template-columns: ${props=> props.columns[0]}% ${props=> props.columns[1]}%;
@media screen and (max-width: 960px){
    grid-template-columns: 100%; padding: 0 10px;
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