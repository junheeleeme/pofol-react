import React, { useState, useLayoutEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'
import styled from 'styled-components'

const IntroStyled = styled.main`
    position: relative;
    top: 0; left: 0;
    width: 100vw;
    min-height: calc(100vh - 80px);
    @media screen and (max-width: 767px) { min-height: 100vh; }
`
const TyperWrap = styled.div`
    position: absolute;
    top: 43%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    user-select: none;
        .Typewriter__wrapper{
            color: ${props => props.theme.colors.textColor};
            font-size: 60px;
        }
        .Typewriter__cursor{
            color: ${props => props.theme.colors.textColor};
            font-size: 70px;
        }
    @media screen and (max-width: 767px) { top: 48%; letter-spacing: -1px; }
    @supports (-webkit-touch-callout: none) { top: 42% !important; };
`

const Index = ({ isVisible, isMount, theme }) => {

    const [isAni, setIsAni] = useState('');

    useLayoutEffect(()=>{
        if(isMount === 'unmountSlideLeft'){
            setIsAni("spinOut");
        }else{
            setIsAni("spinIn");
        }
    },[isMount])


    return(
        <>
            <IntroStyled>
                <section>
                {
                    isVisible ? 
                    <TyperWrap className={isAni} theme={theme}>
                        <Typewriter
                            options={{
                                strings: ['﹤ PORTFOLIO／﹥', `﹤ I'm Front-End Developer／﹥`, `﹤ I'm Web Developer／﹥`],
                                autoStart: true,
                                loop: true,
                                delay : 70,
                                deleteSpeed : 30,
                                pauseFor : 3000,
                            }}
                        />
                    </TyperWrap>
                    :
                    <></>
                }
                </section>
            </IntroStyled>
        </>
    )
}

const mapStateToProps = ({menu, theme}) => ({
    isVisible : menu.isVisible,
    isMount : menu.isMount,
    theme : theme.theme
})

const mapDispatchToProps = ({ setIsVisible });

export default connect(mapStateToProps, mapDispatchToProps)(Index);