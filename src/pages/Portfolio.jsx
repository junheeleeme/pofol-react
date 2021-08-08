import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'
import styled from 'styled-components'
import Main from '../components/Main';
import SubTitle from '../components/SubTitle';
import Row from '../components/Row';

const MainStyled = styled.main`
    background: ${props=> props.theme.colors.bg2Color};
    max-width: 1080px;
    height: calc(100vh - 80px);
    transition: ${props=> props.theme.colors.trans};
    @media screen and (max-width: 1079px) { width: calc(100% - 40px); }
    @media screen and (max-width: 767px) { width: 100vw; height: 100vh; }
`

const Portfolio = ({isVisible, isMount, theme}) => {

    const [showPofol, setShowPofol] = useState(false);

    useEffect(()=>{
        if(!isVisible){
            setTimeout(()=>{ setShowPofol(true); }, 2000);
        }else{
            setShowPofol(true);
        }
    },[isVisible])

    return(
        <>
            {
                showPofol ?
                <MainStyled className={isMount}>
                    포폴
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
})

const mapDispatchToProps = ({ setIsVisible });

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);