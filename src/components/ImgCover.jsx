import React, { useEffect } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';

const ImgCoverStyled = styled.div`
position: absolute; top: 0; left: 50%; transform: translate(-50%, 0); width: 80%; height: 100%; 
background-color: rgba(0,0,0, 0.3); z-index: 9999;
@media screen and (max-width: 767px) { left: 0; transform: none; width: 100%; }`


const ImgCover = ({children, themeMode}) => {

    return(
        <>
            {
                themeMode === "dark" 
                    ?
                <>
                    <ImgCoverStyled/>
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

export default connect(mapStateToProps)(ImgCover);