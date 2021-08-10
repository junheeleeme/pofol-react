import React, { useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import MainFade from '../components/MainFade'
import SubTitle from '../components/SubTitle'
import Col from '../components/Col'
import Row from '../components/Row'
import H3Title from '../components/H3Title'
import { connect } from 'react-redux'
import ImgCover from '../components/ImgCover'


const ImgStyled = styled.img`
width: 80%; margin: 0 auto; z-index: 999;
@media screen and (max-width: 767px) { width: 100%; }`

const PofoleDetail = ({pofol}) => {
    
    const { id } = useParams(); 
    const [idx, setIdx] = useState(Number(id-1));


    return(

        <>
            <MainFade>
                <SubTitle>Portfolio</SubTitle>
                
                <H3Title>{pofol[idx].title + ' (' + pofol[idx].type + ')'}</H3Title>
                        <Row columns={[100, 100]}>
                            <ImgCover>
                                <ImgStyled src={`http://localhost:8080/img/${pofol[idx].title}_play.gif`} alt={pofol[idx].title + ' image'} />
                            </ImgCover>
                        </Row>
                        <Row columns={['50', '50']}>

                            <br/>
                            <p>{pofol[idx].content}</p>
                            <br/>
                            <h4>skills</h4>
                            <ul>
                                {
                                    pofol[idx].skills.map((v, idx) => 
                                        <li key={v+idx}>{v}</li>
                                    )
                                }
                            </ul>

                            <h4>주소</h4>
                            <a href={pofol[idx].link[0]} target="_blank">GITBUT</a>
                            <br/>
                            <a href={pofol[idx].link[1]} target="_blank">VIEW</a>
                        </Row>
            </MainFade>
        </>
    )
}

const mapStateToProps =({pofol}) => ({
    pofol : pofol.pofol
});

export default connect(mapStateToProps)(PofoleDetail);