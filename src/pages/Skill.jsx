import React from 'react'
import MainSlide from '../components/MainSlide';
import SubTitle from '../components/SubTitle';
import Row from '../components/Row';
import Col from '../components/Col';
// import axios from 'axios';
import styled from 'styled-components'

const UlStyled = styled.ul`
    padding-left: 30px;  list-style-type : square; width: 800px;
    @media screen and (max-width: 960px){ width: 100%; }
    @media screen and (max-width: 480px){ padding-left: 10px; }`
const LiStyled = styled.li`
    position: relative; font-size: 18px; line-height: 2; letter-spacing: 0.5px; color: ${props=>props.theme.colors.text2Color};
    @media screen and (max-width: 480px){ letter-spacing: -1px; font-size: 16px; line-height: 1.5; margin-bottom: 10px;}`
const H3Styled = styled.h2`
position: relative; font-size: 21px; padding-left: 25px; margin-bottom: 15px; width: 800px;
color: ${props=> props.theme.colors.textColor};
&:after{ content: ''; position: absolute; top: 45%; left: 7px; transform: translate(0, -50%); width: 8px; height: 2px; 
background: ${props=> props.theme.colors.textColor}; }
@media screen and (max-width: 960px){ width: 100%; }
@media screen and (max-width: 480px){
    font-size: 18px; padding-left: 5px; 
    &:after{ left: -12px;} }`
const PStyled = styled.p`
font-size: 18px; padding-left: 25px; width: 800px; letter-spacing: 0.5px;
color: ${props=> props.theme.colors.text2Color};
@media screen and (max-width: 960px){ width: 100%; }
@media screen and (max-width: 480px){ padding-left: 5px; }`
const BlankStyled = styled.p`
height: 50px;
@media screen and (max-width: 960px){ height: 30px; }`

const Skill = () => {


    return( //Main -> Container -> {children}
        <>

            <MainSlide>
                <SubTitle>Skill</SubTitle>
                
                <Row columns={['100', '100']}>
                    <Col>
                        <H3Styled>주사용 기술</H3Styled>
                        <PStyled>React, Vanila JavaScript, JQuery, HTML/CSS, Axios/Fetch API, Express</PStyled>
                        <BlankStyled/>
                        <H3Styled>사용해본적 있는 기술</H3Styled>
                        <PStyled>AWS, Next.js, Redux, Styled Component</PStyled>
                    </Col>
                </Row>
                <Row columns={['100', '100']}>
                    <Col>
                        <UlStyled>
                            <LiStyled>웹표준, 웹 접근성 및 SEO를 고려한 시멘틱 마크업 작업이 가능합니다.</LiStyled>
                            <LiStyled>HTML과 CSS로 주어진 디자인 레이아웃에 따라 웹을 디자인할 수 있습니다.</LiStyled> 
                            <LiStyled>CSS Media Query를 사용하여 반응형 웹을 만들 수 있습니다.</LiStyled>
                            <LiStyled>Vanila JS와 제이쿼리를 사용하여 DOM 객체를 제어할 수 있습니다.</LiStyled>
                            <LiStyled>AWS EC2, MySQL/MongoDB와 Express를 연동하여 클라이언트와 서버를 구성 할 수 있습니다.</LiStyled>
                        </UlStyled>
                    </Col>
                </Row>
            </MainSlide>

        </>
    )
}

export default Skill;