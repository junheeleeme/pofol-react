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
    list-style: circle; padding-left: 0; margin: 50px 0px 30px;
    @media screen and (max-width: 768px){
        margin: 30px 0 15px;
    }
`
const LiStyled = styled.li`
    display: inline-block; font-size: 14px; line-height: 1.5em; 
    /* color: ${props=> props.theme.colors.textColor}; */
    border: 1px solid #ff8000; color: #ff8000;
    margin: 5px 10px 5px 0; padding: 3px 7px;
`
const BtnWrapStyled = styled.div`
    position: relative; height: 45px;
`
const LeftBtnStyled = styled.a`
display: inline-block; position: absolute; top: 0; left: 0;
width: 49%; height: 100%; line-height: 45px; text-align: center;
background: ${props=> props.theme.colors.bgColor}; color: ${props=> props.theme.colors.textColor};`
const RightBtnStyled = styled.a`
display: inline-block; position: absolute; top: 0; right: 0; 
width: 49%; height: 100%; line-height: 45px; text-align: center;
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
        const idx = Number(params.id-1);
        if(pofol !== null){
            setCurrent(pofol[idx]);
            setIsLoad(true);
        }else{
            getPofol(idx);
        }
        window.scrollTo({top: 0, behavior: 'auto'});
    },[]);


    const getPofol = async (idx) => {
        
        const pofol = await axios({
            method: 'get',
            url : '../portfolio.json',
            // url : 'http://localhost:8080/portfolio.json',
            responseType : 'json'
        });

        if(pofol.status === 200){ // 데이터 수신 성공
            const { data } = pofol; 
            if(data[idx] !== undefined){ //params.id에 맞는 포폴이 있는 경우
                setPofol(data);
                setCurrent(data[idx]);
                setIsLoad(true);
            }else{
                setPofol(data);
                setIsLoad(false);
            }
        }
        else{
            setIsLoad(false);
        }
    }

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
                                
                                <UlStyled>
                                    {
                                        current.skills.map((v, idx) => 
                                            <LiStyled key={v+idx}>{v}</LiStyled>
                                        )
                                    }
                                </UlStyled>
                                <BtnWrapStyled>
                                    <LeftBtnStyled href={current.link[0]} target="_blank">👨‍💻 Github</LeftBtnStyled>    
                                    <RightBtnStyled href={current.link[1]} target="_blank">🖥️<SpanStyled/>View</RightBtnStyled>
                                </BtnWrapStyled>
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