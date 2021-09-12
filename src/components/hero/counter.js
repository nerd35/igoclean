import React from 'react'
import counterIcon from '../../assets/counter-icon1.png'
import counterIcon1 from '../../assets/counter-icon2.png'
import counterIcon2 from '../../assets/counter-icon3.png'
import counterIcon3 from '../../assets/counter-icon4.png'

const Counter = () => {
    return (
        <div className="py-5 counter_container">
            <div className="container">
                <div className="py-3 row">
                    <div className="px-3 mb-2 col-md-3 col-sm-6">
                        <div className="counte_row">
                            <div className="me-3">
                                <img src={counterIcon} alt="..." className="counter_icon" />
                            </div>
                            <div className="ms-3">
                                <p className="mb-0 conter_number">230</p>
                                <p className="counter_text">Project Done</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 mb-2 col-md-3 col-sm-6">
                        <div className="counte_row">
                            <div className="me-3">
                                <img src={counterIcon1} alt="..." className="counter_icon" />
                            </div>
                            <div className="ms-3">
                                <p className="mb-0 conter_number">220</p>
                                <p className="counter_text">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 mb-2 col-md-3 col-sm-6">
                        <div className="counte_row">
                            <div className="me-3">
                                <img src={counterIcon2} alt="..." className="counter_icon" />
                            </div>
                            <div className="ms-3">
                                <p className="mb-0 conter_number">130</p>
                                <p className="counter_text">House Cleaned</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 mb-2 col-md-3 col-sm-6">
                        <div className="counte_row">
                            <div className="me-3">
                                <img src={counterIcon3} alt="..." className="counter_icon" />
                            </div>
                            <div className="ms-3">
                                <p className="mb-0 conter_number">33</p>
                                <p className="counter_text">Team Member</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
