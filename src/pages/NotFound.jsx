import React from 'react'
import MainSlide from '../components/MainSlide';
import styled from 'styled-components';

const H2Styled = styled.h2`
position: absolute; top: 48%; left: 50%; transform: translate(-50%, -50%);
font-size: 40px; text-align: center;`

const NotFound = () => {

    return(
        <>
            <MainSlide>
                <H2Styled>Not Found Page</H2Styled>
            </MainSlide>
        </>
    )
}

export default NotFound;