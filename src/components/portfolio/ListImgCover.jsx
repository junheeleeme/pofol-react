import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

const ListImgStyled = styled.div`
position: absolute; top: 0; left: 50%; transform: translate(-50%, 0); width: 100%; height: 100%; 
background-color: rgba(0,0,0, 0.2); z-index: 800; animation: 0.2s ease-in-out ImgFade;
@media screen and (max-width: 768px) { left: 0; transform: none; width: 100%; }
@keyframes ImgFade{
    0%{ opacity: 0 }
    100%{ opacity: 1 }
}`

const ListImgCover = ({children, themeMode}) => {


    return(
        <>
            {
                themeMode === "dark" 
                    ?
                <>
                    <ListImgStyled/>
                    {children}
                </>
                    :
                <>
                    {children}
                </>
            }
            
        </>
    )
}

const mapStateToProps = ({theme}) => ({
    themeMode : theme.themeMode
});

export default connect(mapStateToProps)(ListImgCover);