import React from 'react'
import styled from 'styled-components';
import whiteMenu from '../../images/nav/whiteMenu.png'
import blackMenu from '../../images/nav/blackMenu.png'
import { connect } from 'react-redux'

const WhiteTheme = styled.a`
    display: inline-block; width: 100%; height: 100%; cursor: pointer;
    background: url(${whiteMenu}) no-repeat center/100%;
`
const DarkTheme = styled.a`
    display: inline-block;width: 100%; height: 100%; background: url(${blackMenu}) no-repeat center/100%; 
`

const menuBtn = ({themeMode}) => {

    return(
        <>
            {
                themeMode === 'dark'
                    ?
                <WhiteTheme/>
                    :
                <DarkTheme/>
            }            
        </>
    )
}

const mapStateToProps = ({theme}) => ({
    themeMode : theme.themeMode
})

export default connect(mapStateToProps)(menuBtn);