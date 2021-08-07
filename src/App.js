import './App.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import styled from 'styled-components';
import Nav from './components/Nav'
import Particle from './components/Particle';
import Index from './pages/Index'
import About from './pages/About'
import Skill from './pages/Skill.jsx'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound';
import { connect } from 'react-redux'
import { setIsVisible, setCurrentMenu, setThemeMode } from './redux/index'

const Juni = styled.div`
    position: relative;    
    width: 100wv;
    height: 100vh;
    overflow: hidden;
    background-color: transparent;
`

const App = ({ themeMode, theme, setThemeMode, route, isVisible, setIsVisible, setCurrentMenu }) => {

  const { pathname } = useLocation();
  const [isNav, setIstNav] = useState(false);

  useEffect(() => {

    /* 컬러 모드 */
    const saveColorMode = localStorage.getItem("colorMode");
    
    if( saveColorMode === null ){ // colorMode 설정
      setThemeMode('dark');
      localStorage.setItem( "colorMode", "dark" );
      
    }else if( saveColorMode === 'dark' ){
      setThemeMode('dark');
      localStorage.setItem( "colorMode", "dark" );
      console.log(themeMode);
      
    }else{
      setThemeMode('light');
      localStorage.setItem( "colorMode", "light" );
      console.log(themeMode);
    }
    /* 컬러 모드 */

    route.map((v, idx) => {
      if(v.path === pathname){
        setCurrentMenu(idx);
      }
    })

    if(!isVisible){ //isVisible = true 이면 첫 로딩이 아님
      setTimeout(()=>{ setIstNav(true); }, 1200);
      setTimeout(()=>{ setIsVisible(true); }, 2500); 
    }else{
      setIsVisible(true);
    }

  }, []);

  const choosePage = () => {

      switch (pathname.substr(1)) {
        case '' : return <Index/> 
        case 'about' : return <About/>
        case 'skill' : return <Skill/>
        case 'portfolio' : return <Portfolio/>
        case 'contact' : return <Contact/>
        default : return <NotFound/>
      }
    
  };
  
  return (
      <ThemeProvider theme={theme}>
        <Juni>
              <Particle theme={theme}/> 
              { isNav ? <Nav/> : <></> }
              { choosePage() }
        </Juni>
      </ThemeProvider>
  );
}

const mapStateToProps = ({menu, theme}) => ({
  route : menu.route,
  isVisible : menu.isVisible,
  themeMode : theme.themeMode,
  theme : theme.theme
});


const mapDispatchToProps = ({ setIsVisible, setCurrentMenu, setThemeMode });

export default connect(mapStateToProps, mapDispatchToProps)(App);

