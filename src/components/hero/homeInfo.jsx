import React from 'react'
import BlogImg from '../../assets/blog.jpeg'
import BlogImg1 from '../../assets/blog1.jpeg'
import BlogImg2 from '../../assets/blog2.jpeg'

const HomeInfo = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <h1 className="mt-2 text-center about_title">_ Latest News _</h1>
                <h2 className="mt-3 mb-5 text-center service_subtitle">We work many fields to clean your surrounding area</h2>
                <div className="col-md-4">
                    <div className="blog_section">
                        <img src={BlogImg} alt="" style={{width: '100%', height: "250px", overflow: "hidden", objectFit: "cover"}}/>
                        <h5 className="px-3 pt-2 blog_title">The secret of cleaning your home</h5>
                        <p className="px-3 mb-0 blog_text">Efficient, Friendly, Residential & Commercial Cleaners Near Australia, your satisfaction is guaranteed!</p>
                        <p className="px-3 pb-3 blog_read_more">Readmore +</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog_section">
                        <img src={BlogImg1} alt="" style={{width: '100%', height: "250px", overflow: "hidden", objectFit: "cover"}}/>
                        <h5 className="px-3 pt-2 blog_title">The secret of cleaning your home</h5>
                        <p className="px-3 mb-0 blog_text">Efficient, Friendly, Residential & Commercial Cleaners Near Australia, your satisfaction is guaranteed!</p>
                        <p className="px-3 pb-3 blog_read_more">Readmore +</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="blog_section">
                        <img src={BlogImg2} alt="" style={{width: '100%', height: "250px", overflow: "hidden", objectFit: "cover"}}/>
                        <h5 className="px-3 pt-2 blog_title">The secret of cleaning your home</h5>
                        <p className="px-3 mb-0 blog_text">Efficient, Friendly, Residential & Commercial Cleaners Near Australia, your satisfaction is guaranteed!</p>
                        <p className="px-3 pb-3 blog_read_more">Readmore +</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default HomeInfo
