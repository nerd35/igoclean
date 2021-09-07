const Footer = () => {
  return (
      <>
    <div className="py-5 counter_container">
      <div className="container">
        <div className="row">
          <div className="mb-3 col-md-3">
            <h1 className="footer_title">
              We are <span className="footer_name">Igoclean!</span>
            </h1>
            <p className="footer_about_text">
              We work with a passion of taking challenges and creating new ones
              in cleaning sector.
            </p>
            <h6 className="mb-0 footer_time">Opening hour </h6>
            <p className="footer_hour_text">Mon – Sat: 8 am – 5 pm,</p>
          </div>
          <div className="mb-3 col-md-3">
            <h1 className="footer_title">Page links</h1>
            <p className="mb-0 footer_hour_text">About us</p>
            <p className="mb-0 footer_hour_text">Services</p>
            <p className="mb-0 footer_hour_text">Careers</p>
            <p className="mb-0 footer_hour_text">Blog</p>
            <p className="mb-0 footer_hour_text">Portfolio</p>
          </div>
          <div className="col-md-3">
            <h1 className="footer_title">Official Info</h1>
            <div className="footer_address">
              <span>
                <i class="fas fa-map-marker-alt text-danger mt-3 me-3"></i>
              </span>
              <span className="footer_hour_text">
                9, emeru street Port Harcourt
              </span>
            </div>
            <div className="footer_address">
              <span>
                <i class="fas fa-envelope text-danger mt-3 me-3"></i>
              </span>
              <span className="footer_hour_text">
                Igocleanservices@gmail.com
              </span>
            </div>
            <div className="footer_address">
              <span>
                <i class="fas fa-phone-volume text-danger mt-3 me-3"></i>
              </span>
              <span className="footer_hour_text">+234 808 609 7376</span>
            </div>
          </div>
          <div className="col-md-3">
            <h1 className="footer_title">Social Links</h1>
            <div className="footer_hour_text">
              <i class="fab fa-facebook-f me-4"></i>
              <i class="fab fa-twitter me-4"></i>{" "}
              <i class="fab fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div className="py-3 text-center bg-dark">
        <h1 className="footer_hour_text">2021 © All rights reserved by <strong className="text-danger">Nerd35</strong></h1>
    </div>
    </>
  );
};

export default Footer;
