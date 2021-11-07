import React, { useEffect } from 'react'
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
    display: inline-block; width: 250px; height: 250px; border-radius: 50%; margin-left: 30px;
    @media screen and (max-width: 768px) { width: 280px; height: 280px; margin-left: 40px; }
    @media screen and (max-width: 480px) { width: 180px; height: 180px; margin-left: 0px; float: right;  }
    background: url(${ProfileImg}) no-repeat center/100%;`
const H3Styled = styled.h3`
    font-size: 24px; margin: 0 0 40px 0; font-weight: 600; letter-spacing: -1px;
    color: ${props=> props.theme.colors.text2Color};
    @media screen and (max-width: 960px){ font-size: 23px; text-align: right; margin: 50px 0 30px 0; }
    @media screen and (max-width: 480px){ font-size: 20px; text-align: left; margin: 20px 0 30px 0; }`

const UlStyled = styled.ul`
    padding-left: 20px; list-style: square;
    @media screen and (max-width: 960px){ display: inline-block; float: right; margin-left: 20%; }
    @media screen and (max-width: 480px){ float: left; padding-left: 10px; margin-left: 0; }`
const LiStyled = styled.li`
    position: relative; font-size: 20px; margin-bottom: 25px; color: ${props=> props.theme.colors.text2Color};
    letter-spacing: 0px;
    @media screen and (max-width: 480px){ font-size: 16px; }`

const Intro = ({theme}) => {

    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'auto'});
    }, [])

    return( //Main -> Container -> {children}
        <>

            <MainSlide>
                <SubTitle>About</SubTitle>
                <Row columns={['35', '65']}>
                    <Col>
                        <ImgStyled/>
                    </Col>
                    <Col>
                        <H3Styled>👋 안녕하세요. 프론트엔드 개발자를 지향하는 이준희입니다.</H3Styled>
                        <UlStyled>
                            <LiStyled>변화와 도전을 통해 부족함을 채우고 성장하며 유연한 사고를 위해 끊임없이 배우려는 개발자입니다.</LiStyled>
                            <LiStyled>웹을 구현하고 스스로 사용해보며 더 나은 사용자 편의성을 추구하고 있습니다.</LiStyled>
                            <LiStyled>현재 웹 프론트엔드 분야를 공부하고 있으며, 더 나아가 백엔드 지식을 습득하길 원합니다. 제가 공부한 내용을 블로그에 기록하는 습관을 가지고 있습니다.</LiStyled>
                            {/* <LiStyled>성장에 대한 열정과 배움에 대한 의지를 높게 </LiStyled> */}

                            {/* <LiStyled><strong>Birthday :</strong>&nbsp;1995.09.07</LiStyled>
                            <LiStyled><strong>blog :</strong>&nbsp;<AStyled href="https://juni-official.tistory.com" target="_blank" title="새창으로 열기">https://juni-official.tistory.com</AStyled></LiStyled>
                            <LiStyled><strong>Phone :</strong>&nbsp;+82) 010-5183-1652</LiStyled>
                            <LiStyled><strong>E-mail :</strong> macjjuni@gmail.com</LiStyled>
                            <LiStyled><strong>Addr :</strong>&nbsp;서울특별시 구로구 오리로11길</LiStyled> */}
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