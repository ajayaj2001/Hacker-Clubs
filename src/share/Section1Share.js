import React from 'react'
import logo from './share-section.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import './Section1Share.scss';
const Section1Share = () => {
    return (
        <div>
            <section id="share-section" class=" bg-light text-muted py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img src={logo} alt="community" class="img-fluid rounded-circle mb-3 "></img>
                        </div>
                        <div class="col-md-6">
                            <div class="d-none d-md-block">
                                <p>Share and explore</p>
                            </div>
                            <div class="d-flex flex-row">
                                <div class="p-4 align-self-start"><FontAwesomeIcon icon={faCheck} className="fa-icon mb-3 " /></div>
                                <div class="p-4 align-self-end">
                                    Share your idea in our community page all the one can see your idea even code and some people give their opinion
                        </div>
                            </div>
                            <div class="d-flex flex-row">
                                <div class="p-4 align-self-start"><FontAwesomeIcon icon={faCheck} className="fa-icon mb-3 " /></div>
                                <div class="p-4 align-self-end">
                                    You can also privately share your idea with company or team to secure your idea and develop with others help
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section1Share
