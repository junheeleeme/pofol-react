import React from 'react'
import { useLayoutEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setIsVisible } from '../redux/index'
import styled from 'styled-components'
import Container from './Container'

const MainStyled = styled.main`
    
    position: relative; background: ${props=> props.theme.colors.bg2Color};
    max-width: 1080px; min-height: calc(100vh - 80px);
    padding: 0 30px; overflow: hidden;
    transition: opacity ${props=> props.theme.colors.trans}, transform ${props=> props.theme.colors.trans}, background-color ${props=> props.theme.colors.trans};
@media screen and (max-width: 1079px) { width: calc(100% - 40px); }
@media screen and (max-width: 768px) { width: 100vw; min-height: 100vh; padding: 0 15px; }`

const MainSlide = ({isVisible, isMount, children}) => {

    const [view, setView] = useState(false);

    useLayoutEffect(()=>{         
        if(!isVisible){
            setTimeout(()=>{ setView(true); }, 2000);
        }else{
            setView(true);
        }
    },[isVisible]);

    return(
        <>
            {
                view 
                    ? 
                <MainStyled className={isMount}>
                    <Container>
                        {children}
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

export default connect(mapStateToProps, mapDispatchToProps)(MainSlide);