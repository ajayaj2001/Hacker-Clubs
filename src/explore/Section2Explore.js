import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from './explore-section.jpg';
import './Section2Explore.scss';
const Section2Explore = () => {
    return (
        <div>
            <section id="explore-section" className="bg-light text-muted py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={logo} alt="community" className="img-fluid rounded-circle mb-3 "></img>
                        </div>
                        <div className="col-md-6">
                            <div className="d-none d-md-block">
                                <p>Weekly events are conducted as per the shedule beginners intract with professions and get
                            more idea and help from our seniours</p>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="p-4 align-self-start"><FontAwesomeIcon icon={faCheck} className="fa-icon mb-3 " /></div>
                                <div className="p-4 align-self-end">
                                    You can ask any doubt and help related field with seniours and our team members also
                                    24/7 queries can answer by our staffs
                        </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="p-4 align-self-start"><FontAwesomeIcon icon={faCheck} className="fa-icon mb-3" /></div>
                                <div className="p-4 align-self-end">
                                    Explore other projects and learn many things, be creative be spotive
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section2Explore
