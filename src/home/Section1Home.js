import React from 'react';
import './Section1Home.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Section1Home = () => {
    return (
        <div>
            <header id="home-header">
                <div className="dark-overlap">
                    <div className="home-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 d-none d-md-block">
                                    <h3 className="display-4">Welcome To <strong> Hacker Club</strong> Let's Join As <strong>
                                        Member</strong></h3>
                                    <div className="d-flex flex-row">
                                        <div className="p-4 align-self-start"> <FontAwesomeIcon icon={faCheck} className="fa-icon mb-3" /></div>
                                        <div className="p-4 align-self-end">
                                            Log in to this page and join to our community lets have some fun
                                            our team members are waiting for you
                                </div>
                                    </div>

                                    <div className="d-flex flex-row">
                                        <div className="p-4 align-self-start"> <FontAwesomeIcon icon={faCheck} className="fa-icon mb-3" /></div>
                                        <div className="p-4 align-self-end">
                                            Meet various type of hackers and learn together with them ,they are came from
                                            countries
                                            like
                                            India , America , China , Austrlia ,etc..
                                </div>
                                    </div>

                                    <div className="d-flex flex-row">
                                        <div className="p-4 align-self-start"> <FontAwesomeIcon icon={faCheck} className="fa-icon mb-3" /></div>
                                        <div className="p-4 align-self-end">
                                            Get the job and work from home Earn lots of money our team members teach you all the
                                            thinks A-Z
                                            learn with fun do for money
                                </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="card bg-primary text-centered card-form">
                                        <div className="card-body">
                                            <h3>Sign Up Today</h3>
                                            <p>Please sign-up the below form to register</p>
                                            <form className="form-group">
                                                <input type="text" className="form-control form-control-lg mb-3"
                                                    placeholder="User Name"></input>
                                                <input type="email" className="form-control form-control-lg mb-3"
                                                    placeholder="Email"></input>
                                                <input type="password" className="form-control form-control-lg mb-3"
                                                    placeholder="password"></input>
                                                <input type="password" className="form-control form-control-lg mb-3"
                                                    placeholder="Confirm Password"></input>
                                                <input id="summit" type="submit" className=" btn btn-outline-light btn-block"></input>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Section1Home
