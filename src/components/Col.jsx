import React from 'react'
import styled from 'styled-components'

const ColStyled = styled.div`
position: relative; display: inline-block; padding: 20px 10px; width: 100%; z-index: 999;
`

const Col = ({children}) => {
    return(
        <>
            <ColStyled>
                {children}
            </ColStyled>
        </>
    )
}

export default Col;