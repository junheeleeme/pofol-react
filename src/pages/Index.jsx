import React, { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'
import styled from 'styled-components'

const SectionWrap = styled.section`
    position: relative;
    top: 0; left: 0;
    width: 100vw;
    height: calc(100vh - 80px);
`
const TyperWrap = styled.div`
    position: absolute;
    top: 42%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
        .Typewriter__wrapper{
            color: ${props => props.theme.colors.textColor};
            font-size: 60px;
        }
        .Typewriter__cursor{
            color: ${props => props.theme.colors.textColor};
            font-size: 70px;
        }
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
            <SectionWrap>
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
            </SectionWrap>
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