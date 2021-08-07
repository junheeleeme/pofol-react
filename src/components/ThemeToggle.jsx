import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setThemeMode } from '../redux/index'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    position: absolute;
    display: inline-block;
    top: 50%; right: 30px;
    transform: translate(0, -50%);
    width: 54px; height: 32px;
    border: none;
    background: #dedede;
    border-radius: 20px;
    border-color: #fff;
    border-style: none;
    cursor : pointer;
    padding: 4px;
`
const ToggleStyled = styled.div`
    position: absolute;
    top: 50%; left: 2px;
    transform: translate(0, -50%);
    background: ${props=>props.theme.colors.textColor};
    width: 24px; height: 24px;
    border-radius: 50%;
    transition: 0.3s ease;
    &.left{
        left: 4px;
    }
    &.right{
        left: 26px;
    }
`

const ThemeToggle = ({themeMode, setThemeMode, theme}) => {

    const [toggle, setToggle] = useState('left');

    const changeTheme = () => {
    
        if(themeMode === 'dark'){
            setThemeMode('light');
            setToggle('left');
        }else{
            setThemeMode('dark');
            setToggle('right');
        }
    }
    

    return(
        <>
            <ButtonStyled className="themeToggle" onClick={changeTheme}>
                <ToggleStyled className={toggle}/>
            </ButtonStyled>
        </>
    )
}

const mapStateToProps = ({theme}) => ({
    themeMode : theme.themeMode
});

const mapDispatchToProps = ({ setThemeMode });

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);