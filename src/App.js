import './App.css';
import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components"
import styled from 'styled-components'
import Header from './components/Header/Header'
import Particle from './components/Particle'
import Index from './pages/Index'
import About from './pages/About'
import Skill from './pages/Skill.jsx'
import PortfolioList from './pages/PortfolioList' 
import PortfolioDetail from './pages/PortfolioDetail';
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import LoadEffect from './components/LoadEffect'
import { connect } from 'react-redux'
import { setIsVisible, setCurrentMenu, setThemeMode, setPofol} from './redux/index'
import axios from 'axios'

const Juni = styled.div`
    position: relative; background-color: transparent;
    width: 100%; min-height: 100vh;
    @media screen and (max-width: 768px) {
      min-height: 100vh;
      min-height: -webkit-fill-available;
      min-height: fill-available;
    }`

const App = ({ theme, setThemeMode, isVisible, setIsVisible, setPofol }) => {

  const [isHeader, setIsHeader] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  

  useEffect(() => {

    getPofol();    

    /* 컬러 모드 */
    const saveColorMode = localStorage.getItem("colorMode");

    switch (saveColorMode) {
      case null:
        setThemeMode('dark');
        localStorage.setItem( "colorMode", "dark" ); //초기 컬러모드 설정
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

    if(!isVisible){ //isVisible = true 이면 Particle로딩 완료
        setTimeout(()=>{ setIsHeader(true); }, 1200);
        setTimeout(()=>{ setIsVisible(true); }, 2500); 
    }else{
        setIsVisible(true);
    }

  }, []);

  const getPofol = async () => {
    
    const pofol = await axios({
        method: 'get',
        url : './portfolio.json',
        // url : 'http://localhost:8080/portfolio.json',
        responseType : 'json'
    });

    if(pofol.status === 200){ // 데이터 수신 성공
        const { data } = pofol; 
          setPofol(data);
          setIsLoad(true);
    }
    else{
      setIsLoad(false);
    }
}


  if(!isLoad){
    return(
      <LoadEffect/>
    )
  }else{

    return(
      <ThemeProvider theme={theme}>
          <Juni>
            <Particle theme={theme}/> 
              { isHeader ? <Header/> : <></> }
        
            <Switch>
              <Route exact path="/" component={Index}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/skill" component={Skill}/>
              <Route exact path="/portfolio" component={PortfolioList}/>
              <Route path="/portfolio/:id" component={PortfolioDetail}/>
              <Route exact path="/contact" component={Contact}/>
              <Route path="/" component={NotFound}/>
            </Switch>

          </Juni>
        </ThemeProvider>
    )
  }
}

const mapStateToProps = ({ menu, theme }) => ({
  route : menu.route,
  isVisible : menu.isVisible,
  themeMode : theme.themeMode,
  theme : theme.theme
});

const mapDispatchToProps = ({ setIsVisible, setCurrentMenu, setThemeMode, setPofol });

export default connect(mapStateToProps, mapDispatchToProps)(App);