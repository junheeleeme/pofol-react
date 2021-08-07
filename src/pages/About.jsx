import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'
import styled from 'styled-components'

const MainStyled = styled.main`
    background: ${props=> props.theme.colors.bg2Color};
    max-width: 1080px;
    height: calc(100vh - 80px);
    transition: ${props=> props.theme.colors.trans};
`

const Intro = ({isVisible, isMount, theme}) => {

    const [showIntro, setShowIntro] = useState(false);

    useEffect(()=>{
        if(!isVisible){
            setTimeout(()=>{ setShowIntro(true); }, 2000);
        }else{
            setShowIntro(true);
        }
    },[isVisible])

    return(
        <>
            {
                showIntro 
                    ? 
                <MainStyled className={isMount}>
                    어바웃
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