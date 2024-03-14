import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 , faCss3Alt ,faNodeJs , faBootstrap , faGithub ,faGit , faReact } from '@fortawesome/free-brands-svg-icons';
import tailwind from './images/images.png';



const TechStack = ()=>{
    return(
        <Fragment>
 <section className="cards" id="services">
        <h4 className="title">Tech stack</h4>
        <div className="content">
            <div className="card">
                <div className="icon"><FontAwesomeIcon className='html-Color' icon={faHtml5} /></div>
                
                <div className="info">
                    <h5> Html </h5>
                </div>
            </div>
            <div className="card">
                <div className="icon"><FontAwesomeIcon className='css-Color' icon={faCss3Alt} /></div>
                <div className="info">
                    <h5> css</h5>
                </div>
            </div>
            <div className="card"> 
                <div className="icon"><FontAwesomeIcon className='js-Color' icon={faNodeJs} /></div>
                <div className="info">
                    <h5> Js </h5>
                
                </div>
            </div>
            <div className="card">  
                <div className="icon"><FontAwesomeIcon className='Bootstrap' icon={faBootstrap} /></div>
                <div className="info">
                    <h5> Bootstrap </h5>
                
                </div>
            </div>
            <div className="card">
                <div className="icon"><img src={tailwind} alt="" /></div>
                <div className="info">
                    <h5>Tailwind Css </h5>
                
                </div>
            </div>
            <div className="card"> 
                <div className="icon"><FontAwesomeIcon className='git' icon={faGit} /></div>
                <div className="info">
                    <h5>git </h5>
    
                </div>
            </div>
            <div className="card"> 
                <div className="icon"><FontAwesomeIcon className='github' icon={faGithub} /></div>
                <div className="info">
                    <h5>github </h5>
               
                </div>
            </div>
        
            <div className="card">
                <div className="icon"><FontAwesomeIcon className='react' icon={faReact} /></div>
                <div className="info">
                    <h5>React </h5>
            
                </div>
            </div>
        </div>
        
    </section>
        </Fragment>
    )
}
export default TechStack ;