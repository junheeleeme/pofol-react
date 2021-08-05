import './App.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import Nav from './components/Nav'
import Particle from './components/Particle';
import Index from './pages/Index'
import Intro from './pages/Intro'
import Skill from './pages/Skill.jsx'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


function App() {

  const [isNav, setIstNav] = useState(false);
  setTimeout(()=> { setIstNav(true); }, 1800);

  return (
    <div className="juni">
      <Particle/>
      {
        isNav ? <Nav/> : <></>
      }
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/intro" component={Intro}/>
        <Route exact path="/skill" component={Skill}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
