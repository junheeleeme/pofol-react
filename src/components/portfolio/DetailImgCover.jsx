import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

const FrameStyled = styled.div`
position: relative; margin: 0 0 30px 0 ;
@media screen and (max-width: 768px) { left: 0; transform: none; width: 100%; }`
const CoverStyled = styled.div`
position: absolute; top: 0; left: 0; width: 100%; height: 99.5%;
background: rgba(0,0,0,0.2); animation: 0.2s ease-in-out ImgFade;
@keyframes ImgFade{
    0%{ opacity: 0 }
    100%{ opacity: 1 }
}`


const DetailImgCover = ({children, themeMode}) => {

    return(
        <>
            {
                themeMode === "dark" 
                    ?
                <FrameStyled>
                    {children}
                    <CoverStyled/>
                </FrameStyled>
                    :
                <FrameStyled>
                    {children}
                </FrameStyled>
            }
            
        </>
    )
}

const mapStateToProps = ({theme}) => ({
    themeMode : theme.themeMode
});

export default connect(mapStateToProps)(DetailImgCover);