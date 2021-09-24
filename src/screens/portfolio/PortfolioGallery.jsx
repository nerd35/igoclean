import React from 'react'
import GalleryImg from '../../assets/img2.jpg'
import GalleryImg1 from '../../assets/img3.jpg'
import GalleryImg2 from '../../assets/img5.JPG'
import GalleryImg3 from '../../assets/img6.jpg'
import GalleryImg4 from '../../assets/img7.jpg'
import GalleryImg5 from '../../assets/img8.jpg'
import GalleryImg6 from '../../assets/img9.jpg'
import GalleryImg7 from '../../assets/img10.jpeg'
import GalleryImg8 from '../../assets/img11.jpg'
import GalleryImg11 from '../../assets/img15.JPG'
import GalleryImg12 from '../../assets/img16.JPG'
import GalleryImg13 from '../../assets/img17.JPG'
import GalleryImg14 from '../../assets/img18.JPG'
import GalleryImg15 from '../../assets/img19.JPG'

const PortfolioGallery = () => {
    return (
        <div className="container py-5">
            <h1 className="text-center">Our Gallery</h1>
            <div className="row">
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg1} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg2} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg3} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg4} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg5} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg6} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg7} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg11} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg12} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg13} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg14} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg15} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
                <div className="mb-3 col-md-4">
                    <img src={GalleryImg8} alt="" style={{width: '100%', height: '400px', overflow: 'hidden', objectFit: 'contain'}} />
                </div>
            </div>
        </div>
    )
}

export default PortfolioGallery
