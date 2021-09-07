import React from 'react'
import AboutImg from '../../assets/img6.jpg'

const AboutAgency = () => {
    return (
        <div className="container py-5 mt-3">
            <div className="mt-5 row">
                <div className="col-md-6">
                    <h1 className="about_title">_ About Igoclean Services _</h1>
                    <h1 className="about_subtitle">Why will you choose our services?</h1>
                    <p className="about_text">Efficient, Friendly, Residential & Commercial Cleaners Near Port Harcourt, your satisfaction is guaranteed! 
                    <br />
                    <br />
                    As a app web crawler expert, I help organizations adjust to the awesome expanding significance of internet promoting. or lipsum as it is some times known, is dummy text.</p>
                    <br/>
                    <span className="mt-3"><i class="fas fa-check me-2"></i> </span><span className="icon_text">Residential Cleaning Services Near You!</span>
                    <br/>
                    <span className="mt-3"><i class="fas fa-check me-2"></i> </span><span className="icon_text">Commercial Cleaning Service In Port Harcourt</span>
                    <br/>
                    <span className="mt-3"><i class="fas fa-check me-2"></i> </span><span className="icon_text">Professional Floor & Carpet Cleaning</span>

                </div>
                <div className="mt-3 col-md-6">
                    <div className="mt-5">
                        <img src={AboutImg} alt="..." className="about_image" style={{maxWidth: '600px', heigh: 'auto', width: "100%", boxShadow: "0px 5px 20px 0px rgb(69 67 96 / 10%)"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAgency;
