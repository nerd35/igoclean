import React from 'react'
import Portfo from '../../assets/img5.JPG'
import Portfo1 from '../../assets/img2.jpg'
import Portfo2 from '../../assets/img7.jpg'

const ProjectSample = () => {
    return (
        <div className="py-5 text-center counter_container">
        <div className="container">
            <h1 className="mt-2 about_title">_ Our Successful Project _</h1>
           <h2 className="mt-3 service_subtitle text-light"> Keep your vision to our latest projects.</h2>
           <p className="mt-3 service_text text-light">Now you can host more parties and rely on our cleaners to do all the hard work for you. At Denver Cleaning Service Company we show your home some TLC because we care!</p>
           <div className="mt-5 row ">
            <div className="mb-3 col-md-4">
                <img src={Portfo} alt="..." style={{ width: "100%", height: "300px"}}/>
            </div>
            <div className="mb-3 col-md-4">
                <img src={Portfo1} alt="..." style={{ width: "100%", height: "300px"}}/>
            </div>
            <div className="mb-3 col-md-4">
                <img src={Portfo2} alt="..." style={{ width: "100%", height: "300px"}}/>
            </div>
           </div>
           </div>
        </div>
    )
}

export default ProjectSample
