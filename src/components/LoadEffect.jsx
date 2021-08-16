import React from 'react'
import styled from 'styled-components'

const WrapStyled = styled.div`
position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
background: rgba(0,0,0,0.0);`

const Div = styled.div`
width: 100px; height: 100px; position: absolute; top: 50%; left: 50%;
transform: translate(-50%, -50%); background: red;`



const LoadEffect = () => {
    return(
        <>
            <WrapStyled>
                
            </WrapStyled>
                
        </>
    )
}

export default LoadEffect;