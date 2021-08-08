import React from 'react'
import styled from 'styled-components'

const ColStyled = styled.div`
position: relative; display: inline-block; padding: 0 10px; width: 100%;
@media screen and (max-width: 960px){ margin: 20px 0; }`

const Col = ({children, padding}) => {
    return(
        <>
            <ColStyled>
                {children}
            </ColStyled>
        </>
    )
}

export default Col;