import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {

    

    return (
        <>
            <nav className="nav navMount">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/intro">Intro</NavLink></li>
                    <li><NavLink to="/skill">Skills</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav