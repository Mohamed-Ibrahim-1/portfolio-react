import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Content = ()=>{
    return(
        <Fragment>
    <section id="contact" className="cards contact">
        <h2 className="title"> To communicate </h2>
        <div className="content">
            <a href="tel:+201271256333" target="_blank">
                <div className="card">
                    <div className="icon"> <FontAwesomeIcon icon={faPhone} /></div>
                    <div className="info">
                        <a href="tel:+201271256333">to call</a>
                    </div>
                </div>
            </a>
            <a href="mailto:mohamedibrahim633398@mail.com?subject-contact" target="_blank">
                <div className="card">
                    <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                    <div className="info">
                        <a href="mailto:mohamedibrahim633398@mail.com?subject-contact">To send a message</a>
                    </div>
                </div>
            </a>
        </div>
    </section>
        </Fragment>
    )
}
export default Content ;