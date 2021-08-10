import React from 'react'
import { useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'
import { setIsVisible } from '../redux/index'
import styled from 'styled-components'
import Container from './Container'


const MainStyled = styled.main`
    position: relative; background: ${props=> props.theme.colors.bg2Color};
    max-width: 1080px; min-height: calc(100vh - 80px);
    padding: 0 30px;
    transition: opacity ${props=> props.theme.colors.trans}, transform ${props=> props.theme.colors.trans}, background-color ${props=> props.theme.colors.trans};
@media screen and (max-width: 1079px) { width: calc(100% - 40px); }
@media screen and (max-width: 767px) { width: 100vw; min-height: 100vh; padding: 0 15px; }`

const BackBtnWrapStyled = styled.div`
position: absolute; top: 40px; right: 30px; width: 40px; height: 40px; cursor: pointer; z-index: 9999; border: 1px solid #000;
@media screen and (max-width: 767px) { position: fixed; top: auto; bottom: 30px; right: 20px; }
`
const SpanStyled = styled.span`
position: absolute; top: 50%; left: 4px; transform: translate(0, -50%);
width: 35px; height: 7px; background: ${props=> props.theme.colors.textColor};
&:after{ content: ''; position: absolute; top: -5px; left: -6px; transform: rotate(-45deg); width: 20px; height: 6px; background: ${props=> props.theme.colors.textColor}; }
&:before{ content: ''; position: absolute; top: 5px; left: -6px; transform: rotate(45deg); width: 20px; height: 6px; background: ${props=> props.theme.colors.textColor}; }
`

const MainSlide = ({isVisible, children}) => {
    const his = useHistory();
    const [view, setView] = useState(false);
    
    useLayoutEffect(()=>{         
        if(!isVisible){
            setTimeout(()=>{ setView(true); }, 2000);
        }else{
            setView(true);
        }
    },[isVisible]);

    const hisBack = () => {
        his.goBack();
    };

    return(
        <>
            {
                view ? 
                <MainStyled className='fadeIn'>
                    <BackBtnWrapStyled onClick={hisBack}><SpanStyled/></BackBtnWrapStyled>
                    <Container>
                        {children}
                    </Container>
                </MainStyled> : <></>
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