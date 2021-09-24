import React from "react";

const ServiceSteps = () => {
  return (
    <div className="py-5 service_step_section">
      <div className="container">
        <h1 className="text-center service_step_title">
          TAKE THE FIRST STEP, WE'LL DO THE REST
        </h1>
        <div className="mt-3 row">
          <div className="mb-3 col-md-3">
            <div className="service_step_row">
              <div className=" service_step_number me-5">1</div>
              <div className=" service_step_content ms-5">
                <h5 className="service_step_number_title">
                  CONTACT IGO CLEAN AGENT
                </h5>
                <p className="service_step_number_text">
                  Call us today to find a IGOCLEAN Agent near you.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3 col-md-3">
            <div className="service_step_row">
              <div className=" service_step_number me-5">2</div>
              <div className=" service_step_content ms-5">
                <h5 className="service_step_number_title">
                  CUSTOMIZE A CLEANING PLAN THAT FITS YOUR NEEDS
                </h5>
                <p className="service_step_number_text">
                Fill out the "Get A Quote"  about the cleaning services you require
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3 col-md-3">
            <div className="service_step_row">
              <div className=" service_step_number me-5">3</div>
              <div className=" service_step_content ms-5">
                <h5 className="service_step_number_title">
                OUR TEAM WILL GET BACK YOU WITHIN 24 HOURS
                </h5>
                <p className="service_step_number_text">
                Our IGOCLEAN location will get back to you to discuss additional information and details.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-3 col-md-3">
            <div className="service_step_row">
              <div className=" service_step_number me-5">4</div>
              <div className=" service_step_content ms-5">
                <h5 className="service_step_number_title">
                SIT BACK AND RELAX WHILE OUR TEAM GETS TO WORK!
                </h5>
                <p className="service_step_number_text">
                IGOCLEAN goes above and beyond the cleaning expectations of customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSteps;
