import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faFacebook ,faTwitter , faInstagram  } from '@fortawesome/free-brands-svg-icons';


const Landing = ()=>{
    return(
        <Fragment>
    <section className="main" id="main">
        <div className="imgsec"></div>
        <div className="maintitle">
            <h2>hello guys, my name is mohamed ibrahim  <br/><span> Front-end developer</span></h2>
            <p> i Look for an internship opportunity to gain more experience </p>
            <p></p>
            <a href="https://github.com/Mohamed-Ibrahim-1" target="_blank"className="main-btn">view my work</a>
            <div className="social-icons1">
                <a href="https://www.linkedin.com/in/mohamed-ibrahim-978615288/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.facebook.com/profile.php?id=61550188828773" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://twitter.com/MohamedIbr26183" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://www.instagram.com/moh633398/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    </section>
        </Fragment>
    )
}
export default Landing ;