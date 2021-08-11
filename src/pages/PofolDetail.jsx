import React, { useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import MainFade from '../components/MainFade'
import SubTitle from '../components/SubTitle'
import Col from '../components/Col'
import Row from '../components/Row'
import H3Title from '../components/H3Title'
import { connect } from 'react-redux'
import DetailImgCover from '../components/portfolio/DetailImgCover'

const WrapStyled = styled.div`
width: 80%; 
@media screen and (max-width: 767px) { width: 100%; }`

const ImgStyled = styled.img`
width: 100%;`

const H4Styled = styled.h4`
font-size: 22px; margin: 40px 0 15px 0;
color: ${props=> props.theme.colors.textColor};`
const UlStyled = styled.ul`
list-style: circle; padding-left: 20px; margin: 20px 0 30px 0;`
const LiStyled = styled.li`
line-height: 24px;`
const LeftBtnStyled = styled.a`
display: inline-block; float:left; width: 49%; height: 45px; line-height: 45px; text-align: center;
background: ${props=> props.theme.colors.bgColor}; color: ${props=> props.theme.colors.textColor};
`

const RightBtnStyled = styled.a`
display: inline-block; float: right; width: 49%; height: 45px; line-height: 45px; text-align: center;
background: ${props=> props.theme.colors.bgColor}; color: ${props=> props.theme.colors.textColor};`
const PStyled = styled.p`
font-size: 19px; line-height: 25px; color: ${props=> props.theme.colors.text2Color};`

const PofoleDetail = ({pofol}) => {
    
    const { id } = useParams(); 
    const [idx, setIdx] = useState(Number(id-1));


    return(

        <>
            <MainFade>
                <SubTitle>Portfolio</SubTitle>
                
                <H3Title>{pofol[idx].title + ' (' + pofol[idx].type + ')'}</H3Title>
                        <Row columns={[100, 100]}>
                            
                            
                        <Col>
                            <WrapStyled>
                            
                            <DetailImgCover>
                                <ImgStyled src={`http://localhost:8080/img/${pofol[idx].title}_play.gif`} alt={pofol[idx].title + ' image'} />
                            </DetailImgCover>

                                    <PStyled>{pofol[idx].content}</PStyled>
                                    
                                    <H4Styled>Skills</H4Styled>
                                    <UlStyled>
                                        {
                                            pofol[idx].skills.map((v, idx) => 
                                                <LiStyled key={v+idx}>
                                                    <PStyled>{v}</PStyled>
                                                </LiStyled>
                                            )
                                        }
                                    </UlStyled>

                                    <div>
                                        <LeftBtnStyled href={pofol[idx].link[0]} target="_blank">GITBUT</LeftBtnStyled>    
                                        <RightBtnStyled href={pofol[idx].link[1]} target="_blank">VIEW</RightBtnStyled>
                                    </div>
                                            
                                </WrapStyled>
                            </Col>
                        </Row>
            </MainFade>
        </>
    )
}

const mapStateToProps =({pofol}) => ({
    pofol : pofol.pofol
});

export default connect(mapStateToProps)(PofoleDetail);