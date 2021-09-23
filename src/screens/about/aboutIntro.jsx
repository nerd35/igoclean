import React from 'react'
import AboutImg from '../../assets/img6.jpg'
import AboutImg1 from '../../assets/img3.jpg'

const AboutIntro = () => {
    return (
        <div className="container py-5">
            <div className="mx-auto row">
                <div className="mx-auto col-md-6">
                    <h1 className="about_section_title">ABOUT OUR COMMERCIAL CLEANING COMPANY</h1>
                    <h5 className="about_subtitle">A Legacy Of Pursuing The Highest Standards</h5>
                    <p className="about_text"> Over time, IgoClean has grown to provide a variety of exceptional cleaning services to a range of commercial and residential properties.<br/><br/>

                    IgoClean is now a world-class company that provides professional cleaning services to more than 500 homes and businesses every day.</p>
                    <h6 className="mt-5 about_subtext">WE ALWAYS STRIVE FOR EXCELLENCE</h6>
                    <p className="about_text"> We have spent more than 12 years getting to know every kind of client – from homeowners to facility managers and property managers to healthcare decision-makers. Our relentless passion for excellence and customer service means we continuously invest in improving our processes, our employees and our relationship with each and every business we serve.</p>

                    <div className="px-3 mt-5 about_service">
                        <h5 className="mt-2 about_subtext">IGOCLEAN IS HERE TO HELP!</h5>
                        <p className="about_text">Contact us today at <strong className="text-danger">(+234) 808 609 7376</strong> to learn more about us and our commercial cleaning services.</p>
                    </div>

                </div>
                <div className="col-md-4">
                    <img src={AboutImg} alt="" style={{ width: '100%'}}/>
                </div>
            </div>
            <div className="mt-5 row">
            <div className="mx-auto col-md-4 mb-3">
                    <img src={AboutImg1} alt="" style={{ width: '100%'}}/>
                </div>
                <div className=" col-md-6">
                    <h1 className="about_section_title">WE DELIVER EXCEPTIONAL RESULTS</h1>
                    <p className="about_text"> When it comes to running your business, we know the importance of selecting a reliable, trusted service provider. And when it comes to cleaning, you want trusted professionals who will treat your facility like their own and deliver exceptional results. <br /><br />

Our vast network of experts provides a range of commercial cleaning services, including carpet cleaning, hard surface floor care, janitorial services, upholstery cleaning and tile and grout cleaning.</p>
                    <h6 className="mt-5 about_subtext">LOCAL SERVICE BACKED BY A NATIONAL NETWORK OF CLEANING EXPERTISE</h6>
                    <p className="about_text"> By choosing IGOCLEAN, you get the perks of a locally owned and operated franchise that is backed by a national network. Our expertly trained, fully dedicated professionals take pride in delivering the highest standards of clean and are guaranteed to treat your home, office or facility like their own. We proudly offer our proprietary Capture and Removal Cleaning® system, which works up to 55% better than conventional cleaning processes.</p>

                   
                </div>
                
            </div>
            <div className="mt-5 mb-5 row">
                <div className="mx-auto col-md-10">
                    <h1 className="about_section_title2">ABOUT IGOCLEAN</h1>
                    <p>IGOCLEAN is the leading provider of cleaning and restoration services in both the residential and commercial markets, operating through an extensive service network of more than 200 company-owned locations and franchise and license agreements.</p>
                </div>
                <div className="mx-auto mt-3 col-md-10">
                    <h1 className="about_section_title2">WE SERVE. WE CARE. WE DELIVER.</h1>
                    <p className="about_text">For over 12 years, IGOClean has been assisting owners and managers from all industries with their cleaning and disinfecting responsibilities. This experience has allowed us to fully understand the unique requirements of each of our clients and customize cleaning plans that perfectly accommodate their needs. Our local franchise owners are proud to serve their communities and always deliver superior reliability.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro
