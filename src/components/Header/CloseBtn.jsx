import React from 'react'
import styled from 'styled-components';
import whiteBtn from '../../images/nav/white_closeBtn.png'
import blackBtn from '../../images/nav/black_closeBtn.png'
import { connect } from 'react-redux'

const WhiteBtnStyled = styled.a`
display: inline-block; width: 100%; height: 100%; cursor: pointer;
background: url(${whiteBtn}) no-repeat center/100%;`
const BlackBtnStyled = styled.a`
display: inline-block; width: 100%; height: 100%; cursor: pointer;
background: url(${blackBtn}) no-repeat center/100%;`

const CloseBtn = ({themeMode}) => {

    return(
        <>
            {
                themeMode === 'dark'
                    ?
                <WhiteBtnStyled/>
                    :
                <BlackBtnStyled/>
            }
        </>
    )
}

const mapStateToProps = ({theme}) => ({
    themeMode : theme.themeMode
});

export default connect(mapStateToProps)(CloseBtn);