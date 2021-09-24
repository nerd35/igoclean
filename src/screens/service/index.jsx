import React from 'react'
import ServiceCustom from './ServiceCustom'
import ServiceHeader from './ServiceHeader'
import ServiceInfo from './ServiceInfo'
import ServiceSteps from './ServiceSteps'

const Service = () => {
    return (
        <div>
            <ServiceHeader/>
            <ServiceInfo/>
            <ServiceSteps/>
            <ServiceCustom/>
        </div>
    )
}

export default Service
