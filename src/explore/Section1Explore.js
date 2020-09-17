import React from 'react'
import './Section1Explore.scss'
const Section1Explore = props => {
    return (
        <div>
            {props.text}
            <section id={props.id} className={props.text}>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="py-5">
                                <h1 className="display-4">{props.title}</h1>
                                <p className="lead ">{props.content}
                                </p>
                                <a href="#explore-head" className={props.classbtn}>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section1Explore
