import React from 'react'
import './Section1Explore.scss'
const Section1Explore = props => {
    return (
        <div>
            <section id={props.id} className={props.class}>
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <div class="py-5">
                                <h1 class="display-4">{props.title}</h1>
                                <p class="lead ">{props.content}
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
