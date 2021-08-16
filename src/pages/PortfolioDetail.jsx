import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MainFade from '../components/MainFade'
import SubTitle from '../components/SubTitle'
import Col from '../components/Col'
import Row from '../components/Row'
import H3Title from '../components/H3Title'
import NotFound from './NotFound'
import { connect } from 'react-redux'
import { setCurrent } from '../redux'
import DetailImgCover from '../components/Portfolio/DetailImgCover'

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

const PortfolioDetail = ({pofol, currentPofol, setCurrent, match }) => {
    
    const [isLoad, setIstLoad] = useState(false);
    const { params } = match;
    
    useEffect(()=>{
        if( pofol.length >= Number(params.id)){
            setCurrent(Number(params.id-1));
            setIstLoad(true);
        }else{
            setIstLoad(false);
        }        
        window.scrollTo({top: 0, behavior: 'auto'});
    }, []);

    return(
        <> 
            {
                isLoad
                    ?
                <MainFade>
                    <SubTitle>Portfolio</SubTitle>

                    <H3Title>{currentPofol.title + ' (' + currentPofol.type + ')'}</H3Title>

                    <Row columns={[100, 100]}>    
                        <Col>
                            <WrapStyled>  
                                <DetailImgCover>
                                    <ImgStyled src={`../images/${currentPofol.title}_play.gif`} alt={currentPofol.title + ' image'} />
                                </DetailImgCover>
        
                                <PStyled>{currentPofol.content}</PStyled>     
                                <H4Styled>Skills</H4Styled>
        
                                <UlStyled>
                                    {
                                        currentPofol.skills.map((v, idx) => 
                                            <LiStyled key={v+idx}>{v}</LiStyled>
                                        )
                                    }
                                </UlStyled>
                                <div>
                                    <LeftBtnStyled href={currentPofol.link[0]} target="_blank">👨‍💻 Github</LeftBtnStyled>    
                                    <RightBtnStyled href={currentPofol.link[1]} target="_blank">🖥️<SpanStyled/>View</RightBtnStyled>
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


const mapStateToProps =({pofol}) => ({
    pofol : pofol.pofol,
    currentPofol : pofol.currentPofol
});

const mapDispatchToProps = ({ setCurrent });

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioDetail);