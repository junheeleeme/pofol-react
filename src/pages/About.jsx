import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'
import styled from 'styled-components'
import Container from './Container';

const MainStyled = styled.main`
    background: ${props=> props.theme.colors.bg2Color};
    max-width: 1080px;
    height: calc(100vh - 80px);
    transition: ${props=> props.theme.colors.trans};
    @media screen and (max-width: 1079px) { width: calc(100% - 40px); }
    @media screen and (max-width: 767px) { width: 100vw; height: 100vh; }`


const Intro = ({isVisible, isMount, theme}) => {

    const [showAbout, setShowAbout] = useState(false);

    useEffect(()=>{
        if(!isVisible){
            setTimeout(()=>{ setShowAbout(true); }, 2000);
        }else{
            setShowAbout(true);
        }
    },[isVisible])

    return(
        <>
            {
                showAbout 
                    ? 
                <MainStyled className={isMount}>
                    <Container>
                        
                    </Container>
                </MainStyled>
                    :
                <></>
            }
        </>
    )
}

const mapStateToProps = ({menu}) => ({
    isVisible : menu.isVisible,
    isMount : menu.isMount
});

const mapDispatchToProps = ({ setIsVisible });

export default connect(mapStateToProps, mapDispatchToProps)(Intro);