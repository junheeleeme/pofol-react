import React from 'react'
import styled from 'styled-components'

const ColStyled = styled.div`
position: relative; display: inline-block; padding: 10px;
@media screen and (max-width: 960px){ margin: 20px 0; }`

const Col = ({children}) => {
    return(
        <>
            <ColStyled >
                {children}
            </ColStyled>
        </>
    )
}

export default Col;