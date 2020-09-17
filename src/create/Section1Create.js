import React from 'react'
import logo from './creat-section-2.jpg';
import './Section1Create.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Section1Create = () => {
    return (
        <div>
            <section id="creat-section" className=" py-4">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="d-none d-md-block">
                                <p>Create various types of project and intract with team members this will increase your chance of getting jobs
                                also develop your communicative skils ,based on your performance critificate will be provided
                        </p>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="p-4 align-self-start"><FontAwesomeIcon icon={faCheck} className="fa-icon mb-3 " /></div>
                                <div className="p-4 align-self-end">
                                    For ideas you can get from our team members also you can share your ideas with your team lets work as team and create various project

                        </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="p-4 align-self-start"><FontAwesomeIcon icon={faCheck} className="fa-icon mb-3 " /></div>
                                <div className="p-4 align-self-end">
                                    you can also partnership with various company if your project is more attractive and creative we also help you to
                                    partner with various company
                        </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={logo} alt="community" className="img-fluid rounded-circle mb-3 "></img>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Section1Create
