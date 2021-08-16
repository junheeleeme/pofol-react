import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MainFade from '../components/MainFade'
import SubTitle from '../components/SubTitle'
import Col from '../components/Col'
import Row from '../components/Row'
import H3Title from '../components/H3Title'
import NotFound from './NotFound'
import DetailImgCover from '../components/Portfolio/DetailImgCover'
import axios from 'axios'
import { connect } from 'react-redux'
import { setPofol } from '../redux'


const WrapStyled = styled.div`
width: 80%; 
@media screen and (max-width: 768px) { width: 100%; }`
const ImgStyled = styled.img`
width: 100%;`
const H4Styled = styled.h4`
font-size: 22px; margin: 40px 0 15px 0;
color: ${props=> props.theme.colors.textColor};`
const UlStyled = styled.ul`
list-style: circle; padding-left: 20px; margin: 20px 0 30px 0;`
const LiStyled = styled.li`
font-size: 17px; line-height: 1.75em; color: ${props=> props.theme.colors.textColor};`
const LeftBtnStyled = styled.a`
display: inline-block; float:left; width: 49%; height: 45px; line-height: 45px; text-align: center;
background: ${props=> props.theme.colors.bgColor}; color: ${props=> props.theme.colors.textColor};`
const RightBtnStyled = styled.a`
display: inline-block; float: right; width: 49%; height: 45px; line-height: 45px; text-align: center;
background: ${props=> props.theme.colors.bgColor}; color: ${props=> props.theme.colors.textColor};`
const PStyled = styled.p`
font-size: 19px; line-height: 27px; color: ${props=> props.theme.colors.text2Color};`
const SpanStyled = styled.span`
display: inline-block; width: 8px;`

const PortfolioDetail = ({ match, pofol, setPofol }) => {
    
    const [isLoad, setIsLoad] = useState(false);
    const { params } = match;
    const [current, setCurrent] = useState();
    

    useEffect(() => {
    
        axios({
            method: 'get',
            url : '../portfolio.json',
            // url : 'http://localhost:8080/portfolio.json',
            responseType : 'json'
        })
        .then((res)=>{
            setCurrent(res.data[Number(params.id-1)]);
            setPofol(res.data);
            setIsLoad(true);
        })
        .catch((err) => {
            console.log(err);
            setIsLoad(false);
        });

        window.scrollTo({top: 0, behavior: 'auto'});
        
    }, []);

    return(
        <> 
            {
                isLoad
                    ?
                <MainFade>
                    <SubTitle>Portfolio</SubTitle>

                    <H3Title>{current.title + ' (' + current.type + ')'}</H3Title>

                    <Row columns={[100, 100]}>    
                        <Col>
                            <WrapStyled>  
                                <DetailImgCover>
                                    <ImgStyled src={`../images/${current.title}_play.gif`} alt={current.title + ' image'} />
                                </DetailImgCover>
        
                                <PStyled>{current.content}</PStyled>     
                                <H4Styled>Skills</H4Styled>
        
                                <UlStyled>
                                    {
                                        current.skills.map((v, idx) => 
                                            <LiStyled key={v+idx}>{v}</LiStyled>
                                        )
                                    }
                                </UlStyled>
                                <div>
                                    <LeftBtnStyled href={current.link[0]} target="_blank">👨‍💻 Github</LeftBtnStyled>    
                                    <RightBtnStyled href={current.link[1]} target="_blank">🖥️<SpanStyled/>View</RightBtnStyled>
                                </div>
                            </WrapStyled>
                        </Col>
                    </Row>
                </MainFade>
                    :
                <NotFound/>

            }
        
        </>
    )
}

const mapStateToProps = ({pofol}) => ({
    pofol : pofol.pofol
})

const mapDispatchToProps = ({ setPofol });

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDetail);