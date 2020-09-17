import React from 'react'
import Section1Explore from './Section1Explore'
import Section2Explore from './Section2Explore'

const Explore = () => {
    return (
        <div>
            <Section1Explore title="Explore" id="explore-head" classbtn="btn btn-outline-secondary" content="After you are join as member you can explore the skills via various community and compatation get more gifts and jobs" />
            <Section2Explore />
        </div>
    )
}

export default Explore
