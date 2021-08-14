import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setThemeMode } from '../../redux/index'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    position: absolute;
    display: inline-block;
    top: 48%; right: 20px;
    transform: translate(0, -50%);
    width: 54px; height: 32px;
    border: none;
    background: #c9c9c9;
    border-radius: 20px;
    cursor : pointer;
    padding: 4px;
    @media screen and (max-width: 768px){
        top: 20px; right: 20px;
        transform: translate(0, 0);
    }
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

const ThemeToggle = ({themeMode, setThemeMode}) => {

    const [toggle, setToggle] = useState('');
    
    useEffect(()=> {
        if(themeMode === 'dark'){
            setToggle('right');
            localStorage.setItem( "colorMode", "dark" );
        }else{
            setToggle('left');
            localStorage.setItem( "colorMode", "light" );
        }
    }, [themeMode])

    const changeTheme = () => {
        if(themeMode === 'dark'){
            setThemeMode('light');
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