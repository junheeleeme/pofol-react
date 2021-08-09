import React, { useState, useEffect } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import MainSlide from '../components/MainSlide'
import SubTitle from '../components/SubTitle'
import Row from '../components/Row'
import Col from '../components/Col'
import Cards from '../components/Cards'
import PofolDetail from './PofolDetail'
import styled from 'styled-components'


const LinkStyled = styled(Link)`
display: inline-block; width: 100%; height: 100%;`


const Portfolio = ({pofol}) => {

    console.log(pofol)

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
                                                    {po.title}
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