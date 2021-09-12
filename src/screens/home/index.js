import React from 'react'
import { Hero, AboutAgency, Counter, Services, ProjectSample, HomeInfo, Ourservices } from '../../components'

const index = () => {
    return (
        <div>
            <Hero/>
            <AboutAgency />
            <Counter/>
            <Services/>
            <ProjectSample/>
            <Ourservices/>
            <HomeInfo/>
        </div>
    )
}

export default index
