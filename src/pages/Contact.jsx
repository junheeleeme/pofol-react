import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MainSlide from '../components/MainSlide';
import SubTitle from '../components/SubTitle';


const ShowAniEffect = styled.div`
position: absolute; width: 100%; bottom: 0; left: 0px; padding: 0 10px 50px 50px; animation: 0.67s ease-in-out FadeUpEffect;
@media screen and (max-width: 768px){ padding: 0 15px 50px 50px; }
@media screen and (max-width: 480px){ padding: 0 15px 50px 20px; }
@keyframes FadeUpEffect{
    0%{opacity: 0; transform: translateY(50px); }
    100%{ opacity: 1; transform: tranlateY(0px); }
}`
const PStyled = styled.p`
font-size: 65px; font-weight: bold; margin-bottom: 30px;
color: ${props=> props.theme.colors.text2Color};
@media screen and (max-width: 768px){ font-size: 50px; margin-bottom: 20px; }`
const UlStyled = styled.ul`
    padding-left: 25px; margin: 0; list-style: square; width: 100%;
    @media screen and (max-width: 768px){ padding-left: 15px; }`
const LiStyled = styled.li`
    position: relative; font-size: 20px; line-height: 35px; color: ${props=> props.theme.colors.text2Color};
    letter-spacing: 0px;
    @media screen and (max-width: 480px){ white-space: nowrap; font-size: 15px; line-height: 30px; height: 30px; }` 
const AStyled = styled.a`
color: ${props=> props.theme.colors.textColor};`

const Contact = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=> {
        setTimeout(()=>{ setIsVisible(true) }, 500);
    }, [])

    return(
        <>
            <MainSlide>
                    <SubTitle>Contact</SubTitle>
                {   isVisible
                        ?
                    <ShowAniEffect>      
                        <PStyled>방문해 주셔서 감사합니다.</PStyled>
                        
                        <UlStyled>
                            <LiStyled>
                                    <strong>NAME</strong> : LEE JUNHEE
                            </LiStyled>
                            <LiStyled>
                            <AStyled href="mailto:macjjuni@naver.com" title="이메일 보내기">
                                    <strong>E-MAIL</strong> : macjjuni@gmail.com
                                </AStyled>
                            </LiStyled>
                            <LiStyled>
                                <AStyled href="#" onclick="return false;">
                                    <strong>PHONE</strong> : (+82) 010-5183-1652
                                </AStyled>
                            </LiStyled>
                            <LiStyled>
                                <AStyled href="https://github.com/junheeleeme" target="_blank" title="새창으로 주소이동">
                                    <strong>GITHUB</strong> : https://github.com/junheeleeme
                                </AStyled>
                            </LiStyled>
                            <LiStyled>
                                <AStyled href="https://juni-official.tistory.com" target="_blank" title="새창으로 주소이동">
                                    <strong>BLOG</strong> : https://juni-official.tistory.com
                                </AStyled>
                            </LiStyled>
                        </UlStyled>
                    </ShowAniEffect>
                        :
                    <></>
                } 
            </MainSlide>
        </>
    )
}

export default Contact;