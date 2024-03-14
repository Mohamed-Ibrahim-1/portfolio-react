import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Header = ()=>{
    return(
        <Fragment>
            <header id="Home">
            <a href="main" className="logo">M I K
            </a>
            <nav className="none">
                <a href="#services">Services</a>
                <a href="#Project">Project</a>
                <a href="#contact">Contact</a>
                <a href="#footer">About</a>
            </nav>
            <a className="tog" onClick="clickme()" href='/'><FontAwesomeIcon icon={faBars} /></a>
    
        </header>
        
        </Fragment>
    )
}
export default Header ;