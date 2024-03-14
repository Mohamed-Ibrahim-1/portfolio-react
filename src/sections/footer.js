import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faFacebook ,faTwitter , faInstagram  } from '@fortawesome/free-brands-svg-icons';


const Footer = ()=>{
    return(
        <Fragment>
    <footer id="footer" className="footer">
        <p className="footer-title">COPYRIGHTS @ <a href="#main">M I K</a></p>
        <div className="social-icons">
                <a href="https://www.linkedin.com/in/mohamed-ibrahim-978615288/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.facebook.com/profile.php?id=61550188828773" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://twitter.com/MohamedIbr26183" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com/moh633398/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
    </footer>
        </Fragment>
    )
}
export default Footer ;