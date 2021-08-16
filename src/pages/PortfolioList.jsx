import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import MainSlide from '../components/MainSlide'
import SubTitle from '../components/SubTitle'
import Col from '../components/Col'
import Row from '../components/Row'
import Cards from '../components/Portfolio/Cards'
import ListImgCover from '../components/Portfolio/ListImgCover'
import axios from 'axios'

const LinkStyled = styled(Link)`
position: relative; display: inline-block; width: 100%; height: 100%; overflow: hidden;
&:hover .hover{ left : 0 !important; }`
const ThumbStyled = styled.img`
position: absolute; top: 0; left: 0; display: inline-block; width: 100%; height: 100%;`

const ThumbHoverStyled = styled.div`
position: absolute; top: 0; padding: 25px; left: -100%; width: 100%; height: 100%; background-color: rgba(0,0,0, 0.5);
transition: 0.3s ease; z-index: 400;
@media screen and (max-width: 960px){ padding: 17px; }
@media screen and (max-width: 480px){ padding: 18px; }`

const ThumbTitle = styled.p`
font-size: 25px; color: #fff; font-weight: bold;
@media screen and (max-width: 960px){ font-size: 30px; }
@media screen and (max-width: 768px){ font-size: 27px; }
@media screen and (max-width: 480px){ font-size: 24px; }`


const Portfolio = ({pofol}) => {

    return(
    <>
        <MainSlide>
            <SubTitle>Portfolio</SubTitle>
                <Row columns={['50', '50']}>
                    {
                        pofol.map((po, idx) => 
                        <Col  key={po.title + idx+1}>
                            <Cards>                                            
                                <LinkStyled to={`/portfolio/${idx+1}`}>
                                        <ListImgCover/>
                                        <ThumbStyled src={`./images/${po.title}_cover.png`}/>
                                    
                                        <ThumbHoverStyled className="hover">
                                            <ThumbTitle>{po.title}</ThumbTitle>
                                        </ThumbHoverStyled>
                                    
                                </LinkStyled>
                            </Cards>
                        </Col>
                        )
                    }
                </Row>
        </MainSlide>
    </>
    )

}

const mapStateToProps = ({pofol}) => ({
    pofol : pofol.pofol
})

export default connect(mapStateToProps)(Portfolio);