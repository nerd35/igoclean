import React from 'react'

const Services = () => {
    return (
        <div className="container py-5">
            <div className="text-center">
                <h5 className="service_title">_ What we do? _</h5>
                <h2 className="service_subtitle">We work many fields to clean your surrounding area</h2>
                <p className="mt-2 service_text">We understand your busy schedule and we are just a phone call away. Let our experienced cleaners do the cleaning.</p>
            </div>
            <div className="row">
                <div className="mb-3 col-md-4">
                    <div className="card_container">
                    <i class="fas fa-tshirt fa-3x py-4 px-3 text-light" style={{background: 'red', borderRadius: '50%'}}></i>
                    <p className="mt-2 card_service_title">Laundry/ Drycleaning	</p>
                    <p className="card_service_text">Office Services, Sweeping Mopping, Kitchen Cleaning, Cleaning Emergency Clean up, Appliance Cleaning (Intrior & exterior)</p>
                    </div>
                </div>
                <div className="mb-3 col-md-4">
                    <div className="card_container">
                    <i class="fas fa-toilet fa-3x py-4 px-4 text-light" style={{background: 'red', borderRadius: '50%'}}></i>
                    <p className="mt-2 card_service_title">General Cleaning</p>
                    <p className="card_service_text">Office Services, Sweeping Mopping, Kitchen Cleaning, Cleaning Emergency Clean up, Appliance Cleaning (Intrior & exterior)</p>
                    </div>
                </div>
                <div className="mb-3 col-md-4">
                    <div className="card_container">
                    <i class="fas fa-broom fa-3x py-4 px-3 text-light" style={{background: 'red', borderRadius: '50%'}}></i>
                    <p className="mt-2 card_service_title">Fumigation and Pest Control </p>
                    <p className="card_service_text">Office Services, Sweeping Mopping, Kitchen Cleaning, Cleaning Emergency Clean up, Appliance Cleaning (Intrior & exterior)</p>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Services
