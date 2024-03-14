import React, { Fragment } from 'react';
import firstproject from './images/first-project.png';
import secondproject from './images/second-project.png';
import Thirdproject from './images/Third-project.png';
import Fourthproject from './images/Fourth-project.png';



const ProjectTraining = ()=>{ 
    return(
        <Fragment>
            <section className="projects" id="Project">

        <h6 className="title">Project Training </h6>
        <div className="content">
            <div className="project-card">
                <div className="project-image">
                    <img src={firstproject} alt="" />
                </div>
                <div className="project-info">
                    <p className="project-category">first-project</p>
                    <strong className="project-title">
                        <a href="https://mohamed-ibrahim-1.github.io/-Template-One/" className="more-details"
                            target="_blank">more details</a>
                    </strong>
                </div>
            </div>
            <div className="project-card">
                <div className="project-image">
                    <img src={secondproject}alt="" />
                </div>
                <div className="project-info">
                    <p className="project-category">second-project</p>
                    <strong className="project-title">
                        <a href="https://mohamed-ibrahim-1.github.io/-Template-two/" className="more-details"
                            target="_blank">more details</a>
                    </strong>
                </div>
            </div>
            <div className="project-card">
                <div className="project-image">
                    <img src={Thirdproject} alt="" />
                </div>
                <div className="project-info">
                    <p className="project-category">Third-project</p>
                    <strong className="project-title">
                        <a href="https://mohamed-ibrahim-1.github.io/YouTube/" className="more-details"
                            target="_blank">more details</a>
                    </strong>
                </div>
            </div>
            <div className="project-card">
                <div className="project-image">
                    <img src={Fourthproject} alt="" />
                </div>
                <div className="project-info">
                    <p className="project-category">Fourth-project</p>
                    <strong className="project-title">
                        <a href="https://mohamed-ibrahim-1.github.io/Template-four/" className="more-details"
                            target="_blank">more details</a>
                    </strong>
                </div>
            </div>
        </div>
    </section>

        </Fragment>
    )
}
export default ProjectTraining ;