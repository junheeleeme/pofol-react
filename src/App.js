import './App.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from './components/Nav'
import Particle from './components/Particle';
import Index from './pages/Index'
import About from './pages/About'
import Skill from './pages/Skill.jsx'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound';
import { connect } from 'react-redux'
import { setIsVisible, setCurrentMenu } from './redux/index'


const App = ({ route, isVisible, setIsVisible, setCurrentMenu }) => {

  const { pathname } = useLocation();
  const [isNav, setIstNav] = useState(false);


  useEffect(() => {
    
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
  }, [])


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
    <div className="juni">
      <Particle/>

      {
        isNav ? <Nav/> : <></>
      }
  
      { choosePage() }
  
    </div>
  );
}

const mapStateToProps = ({menu}) => ({
  route : menu.route,
  isVisible : menu.isVisible
});

const mapDispatchToProps = ({ setIsVisible, setCurrentMenu });

export default connect(mapStateToProps, mapDispatchToProps)(App);
