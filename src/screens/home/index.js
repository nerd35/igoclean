import React from 'react'
import { Hero, AboutAgency, Counter, Services, ProjectSample, HomeInfo } from '../../components'

const index = () => {
    return (
        <div>
            <Hero/>
            <AboutAgency />
            <Counter/>
            <Services/>
            <ProjectSample/>
            <HomeInfo/>
        </div>
    )
}

export default index
