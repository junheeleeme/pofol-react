import './App.css';
import React, { useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
import styled from 'styled-components'
import Header from './components/Header/Header'
import Particle from './components/Particle'
import Index from './pages/Index'
import About from './pages/About'
import Skill from './pages/Skill.jsx'
import Portfolio from './pages/Portfolio' 
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import LoadEffect from './components/LoadEffect'
import { connect } from 'react-redux'
import { setIsVisible, setCurrentMenu, setThemeMode, setPorfol} from './redux/index'
import axios from 'axios'

const Juni = styled.div`
    position: relative;    
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: transparent;
    // @supports (-webkit-touch-callout: none) { height: -webkit-fill-available; };
`
const App = ({ theme, setThemeMode, isVisible, setIsVisible, setPorfol }) => {

  const { pathname } = useLocation();
  const [isHeader, setIsHeader] = useState(false);
  const [isLoad, setIsLoad] = useState(false);


  useLayoutEffect(() => {

    axios.get('http://localhost:8080/pofofllist')
    .then(res => {
        setPorfol(res.data);
        setIsLoad(true);
    })
    .catch(err=> console.log(err));
    // setIsLoad(true);
    /* 컬러 모드 */
    const saveColorMode = localStorage.getItem("colorMode");

    switch (saveColorMode) {
      case null:
        setThemeMode('dark');
        localStorage.setItem( "colorMode", "dark" );
        break;
        case 'dark':
          setThemeMode('dark');
          localStorage.setItem( "colorMode", "dark" );
          break;
        case 'light':
          setThemeMode('light');
          localStorage.setItem( "colorMode", "light" );
          break;
      default:
        break;
    }
  
    // /* 현재 TopMenu 찾기 */
    // const pathIdx = pathname.indexOf('/', 1);
    // const path = pathIdx === -1 ? pathname : pathname.slice(0, pathIdx);
    // // URL 1dept 구분을 위해 '/' 뒷 주소 제거 
  
    // // route.map((v, idx) => {
    // //   if(v.path === path){ 
    // //     setCurrentMenu(idx);
    // //   }
    // // });

    if(!isVisible){ //isVisible = true 이면 Particle로딩 완료
      setTimeout(()=>{ setIsHeader(true); }, 1200);
      setTimeout(()=>{ setIsVisible(true); }, 2500); 
    }else{
      setIsVisible(true);
    }

  }, []);

  const choosePage = () => {

      const pathIdx = pathname.indexOf('/', 1);
      const path = pathIdx === -1 ? pathname : pathname.slice(0, pathIdx); 
      // URL 1dept 구분을 위해 '/' 뒷 주소 제거 

      switch (path) {
        case '/' : return <Index/>
        case '/about' : return <About/>
        case '/skill' : return <Skill/>
        case '/portfolio' : return <Portfolio/>
        case '/contact' : return <Contact/>
        default : return <NotFound/>
      }
  
  };
  
  return (
    <>
      {
        !isLoad
          ?
        <LoadEffect/>
          :
        <ThemeProvider theme={theme}>
          <Juni>
                <Particle theme={theme}/> 
                { isHeader ? <Header/> : <></> }
                { choosePage() }
          </Juni>
        </ThemeProvider>        
      }
    </>
  );
}

const mapStateToProps = ({ menu, theme }) => ({
  route : menu.route,
  isVisible : menu.isVisible,
  themeMode : theme.themeMode,
  theme : theme.theme
});


const mapDispatchToProps = ({ setIsVisible, setCurrentMenu, setThemeMode, setPorfol });

export default connect(mapStateToProps, mapDispatchToProps)(App);