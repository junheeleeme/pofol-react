import React, { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'
import styled from 'styled-components'

const MainIntro = styled.main`
    position: relative;
    top: 0; left: 0;
    width: 100vw;
    height: calc(100vh - 80px);
    @media screen and (max-width: 767px) { height: 100vh; }
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

    useEffect(()=>{
        if(isMount === 'unmountSlideLeft'){
            setIsAni("fadeOut");
        }else{
            setIsAni("fadeIn");
        }
    },[isMount])


    return(
        <>
            <MainIntro>
                <section>
                {
                    isVisible ? 
                    <TyperWrap className={`${isAni}`} theme={theme}>
                        <Typewriter
                            options={{
                                strings: ['﹤ PORTFOLIO／﹥', `﹤ I'm Front-End Developer／﹥`],
                                autoStart: true,
                                loop: true,
                                delay : 70,
                                deleteSpeed : 35,
                                pauseFor : 5000,
                            }}
                        />
                    </TyperWrap>
                    :
                    <></>
                }
                </section>
            </MainIntro>
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