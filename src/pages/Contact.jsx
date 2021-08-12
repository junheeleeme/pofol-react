import React from 'react'
import styled from 'styled-components'
import MainSlide from '../components/MainSlide';
import SubTitle from '../components/SubTitle';
import Row from '../components/Row';
import Col from '../components/Col';

const ShowAniEffect = styled.div`
position: absolute; bottom: 100px; left: 80px; width: 100%; animation: 0.85s ease-in-out FadeUpEffect;
@media screen and (max-width: 767px){ bottom: 50px; left: 15px;  padding: 0 15px 0 0; }
@keyframes FadeUpEffect{
    0%{opacity: 0; transform: translateY(50px); }
    100%{ opacity: 1; transform: tranlateY(0px); }
}`
const PStyled = styled.p`
font-size: 65px; font-weight: bold; margin-bottom: 30px;
color: ${props=> props.theme.colors.text2Color};
@media screen and (max-width: 767px){ font-size: 55px; margin-bottom: 20px; }`
const UlStyled = styled.ul`
    padding-left: 25px; margin: 0; list-style: square; width: 100%;
    @media screen and (max-width: 767px){ padding-left: 15px; }`
const LiStyled = styled.li`
    position: relative; font-size: 20px; line-height: 35px; color: ${props=> props.theme.colors.text2Color};
    letter-spacing: 0px;
    @media screen and (max-width: 480px){ white-space: nowrap; font-size: 15px; line-height: 30px; height: 30px; }` 
const AStyled = styled.a`
color: ${props=> props.theme.colors.textColor};`

const Contact = () => {


    return(
        <>
            <MainSlide>
                <SubTitle>Contact</SubTitle>
                
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
                                <AStyled href="#" class="copy_btn" id="copy-email">
                                    <span class="tooltip">Copied</span>
                                </AStyled>
                            </LiStyled>
                            <LiStyled>
                                <AStyled href="#" onclick="return false;">
                                    <strong>PHONE</strong> : (+82) 010-5183-1652
                                </AStyled>
                                <AStyled href="#" class="copy_btn" id="copy-phone">
                                    <span class="tooltip">Copied</span>
                                </AStyled>
                            </LiStyled>
                            <LiStyled>
                                <AStyled href="https://github.com/junheeleeme" target="_blank" title="새창으로 주소이동">
                                    <strong>GITHUB</strong> : https://github.com/junheeleeme
                                </AStyled>
                            </LiStyled>
                        </UlStyled>
                    
                </ShowAniEffect>
            </MainSlide>   
        </>
    )
}

export default Contact;