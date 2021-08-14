import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import MainSlide from '../components/MainSlide'
import SubTitle from '../components/SubTitle'
import Row from '../components/Row'
import Col from '../components/Col'
import Cards from '../components/portfolio/Cards'
import PofolDetail from './PofolDetail'
import ListImgCover from '../components/portfolio/ListImgCover'
import styled from 'styled-components'

const LinkStyled = styled(Link)`
position: relative; display: inline-block; width: 100%; height: 100%; overflow: hidden;
&:hover .hover{ left : 0 !important; }`
const ThumbStyled = styled.img`
position: relative; width: 100%; height: 100%;`

const ThumbHoverStyled = styled.div`
position: absolute; top: 0; padding: 25px; left: -100%; width: 100%; height: 100%; background-color: rgba(0,0,0, 0.5);
transition: 0.3s ease; z-index: 100;
@media screen and (max-width: 960px){ padding: 30px; }
@media screen and (max-width: 480px){ padding: 22px; }`

const ThumbTitle = styled.p`
font-size: 25px; color: #fff; font-weight: bold; z-index: 900;
@media screen and (max-width: 960px){ font-size: 30px; }
@media screen and (max-width: 768px){ font-size: 35px; }
@media screen and (max-width: 480px){ font-size: 27px; }`


const Portfolio = ({pofol}) => {


    return(
        <>
            <Switch>
                <Route exact path="/portfolio">
                    <MainSlide>
                        <SubTitle>Portfolio</SubTitle>
                            <Row columns={['50', '50']}>
                                {
                                    pofol.map((po, idx) => 
                                    <Col  key={po.title + idx+1}>
                                        
                                            <Cards>                                            
                                                <LinkStyled to={`/portfolio/${idx+1}`}>
                                                        <ListImgCover/>
                                                        <ThumbStyled src={`http://localhost:8080/img/${po.title}_cover.png`}/>
                                                    
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
                </Route>
                <Route path="/portfolio/:id">
                    <PofolDetail/>
                </Route>
            </Switch>

        </>
    )
}


const mapStateToProps = ({pofol}) => ({
    pofol : pofol.pofol
})

export default connect(mapStateToProps)(Portfolio);