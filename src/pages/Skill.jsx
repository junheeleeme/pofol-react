import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { setIsVisible } from '../redux/index'
import Main from '../components/Main';
import SubTitle from '../components/SubTitle';
import Row from '../components/Row';
// import axios from 'axios';
import styled from 'styled-components'

const UlStyled = styled.ul`
    padding-left: 10px;  list-style-type : square;
`
const LiStyled = styled.li`
    position: relative; font-size: 20px; line-height: 1.8; color: ${props=>props.theme.colors.text3Color};
    @media screen and (max-width: 480px){ 
        letter-spacing: -1px; font-size: 16px; margin-bottom: 10px;
    }
`


const Skill = () => {


    useEffect(()=> { 
        // axios.get('./portfolio.json').then(res=> console.log(res)).catch(err=> console.log(err)); 
    }, []);


    return( //Main -> Container -> {children}
        <>

            <Main>
                <SubTitle>Skill</SubTitle>
                <Row columns={[100, 100]}>
                    <UlStyled>
                        <LiStyled>HTML과 CSS로 주어진 디자인 레이아웃에 따라 웹을 디자인할 수 있습니다.</LiStyled>
                        <LiStyled>웹표준 / 웹 접근성 및 SEO를 고려한 시멘틱 마크업 작업이 가능합니다.</LiStyled>
                        <LiStyled>CSS Media Query를 사용하여 반응형 웹을 만들 수 있습니다.</LiStyled>
                        <LiStyled>Vanila JS와 제이쿼리를 사용하여 DOM 객체를 제어할 수 있습니다.</LiStyled>
                        <LiStyled>AWS EC2, MySQL/MongoDB와 Express를 연동하여 클라이언트와 서버를 구성 할 수 있습니다.</LiStyled>
                    </UlStyled>
                </Row>
            </Main>

        </>
    )
}

export default Skill;