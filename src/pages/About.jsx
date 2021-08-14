import React from 'react'
import { connect } from 'react-redux'
import { setIsVisible } from '../redux/index'
import styled from 'styled-components'
import MainSlide from '../components/MainSlide'
import SubTitle from '../components/SubTitle'
import Row from '../components/Row'
import ProfileImg from '../images/profile.jpg'
import Col from '../components/Col'
import Ani from '../components/About/Ani'

const ImgStyled = styled.div`
    display: inline-block; width: 260px; height: 260px; border-radius: 50%; margin-left: 30px;
    @media screen and (max-width: 768px) { margin-left: 40px;  }
    @media screen and (max-width: 480px) { width: 260px; height: 260px; margin-left: 0px; float: right;  }
    background: url(${ProfileImg}) no-repeat center/100%;`
const H3Styled = styled.h3`
font-size: 25px; margin: 10px 0 30px 0; font-weight: 600; letter-spacing: -1px;
color: ${props=> props.theme.colors.text2Color};
@media screen and (max-width: 960px){ font-size: 23px; text-align: right; }

@media screen and (max-width: 480px){ font-size: 20px; text-align: left; }` 
const UlStyled = styled.ul`
    padding-left: 40px;
@media screen and (max-width: 960px){ display: inline-block; float: right; margin-right: 13%; }
@media screen and (max-width: 480px){ float: left; padding-left: 10px; }`
const LiStyled = styled.li`
    position: relative; font-size: 20px; margin-bottom: 13px; color: ${props=> props.theme.colors.text2Color};
    letter-spacing: 0px;
    @media screen and (max-width: 480px){ white-space: nowrap; font-size: 16px; } 
    &:after{ content: ''; position absolute; left: -17px; top: 50%; transform: translate(0, -50%);
    width: 5px; height: 5px; border-radius: 2px; background: ${props=> props.theme.colors.textColor};}`
    
const AStyled = styled.a`
color: ${props=> props.theme.colors.text2Color}; `

const Intro = ({theme}) => {

    return( //Main -> Container -> {children}
        <>

            <MainSlide>
                <SubTitle>About</SubTitle>
                <Row columns={['35', '65']}>
                    <Col>
                        <ImgStyled/>
                    </Col>
                    <Col>
                        <H3Styled>👋 안녕하세요. 풀스택 개발자를 지향하는 이준희입니다.</H3Styled>
                        <UlStyled>
                            <LiStyled><strong>Birthday :</strong>&nbsp;1995.09.07</LiStyled>
                            <LiStyled><strong>blog :</strong>&nbsp;<AStyled href="https://juni-official.tistory.com" target="_blank" title="새창으로 열기">https://juni-official.tistory.com</AStyled></LiStyled>
                            <LiStyled><strong>Phone :</strong>&nbsp;+82) 010-5183-1652</LiStyled>
                            <LiStyled><strong>E-mail :</strong> macjjuni@gmail.com</LiStyled>
                            <LiStyled><strong>Addr :</strong>&nbsp;서울특별시 구로구 오리로11길</LiStyled>
                        </UlStyled>
                    </Col>
                </Row>
                <Ani/>
            </MainSlide>

        </>
    )
}

const mapStateToProps = ({menu}) => ({
    isVisible : menu.isVisible,
    isMount : menu.isMount
});

const mapDispatchToProps = ({ setIsVisible });

export default connect(mapStateToProps, mapDispatchToProps)(Intro);