import React from "react";
import ServiceImg from "../../assets/img15.JPG";
import ServiceImg1 from "../../assets/img16.JPG";
import ServiceImg2 from "../../assets/img17.JPG";
import ServiceImg3 from "../../assets/img18.JPG";

const ServiceInfo = () => {
  return (
    <div className="container py-5">
      <div className="mb-4 row">
        <div className="px-4 py-5 mx-auto shadow service_section col-md-6">
          <h1 className="service_section_title">
            OUR COMMERCIAL CLEANING SERVICES
          </h1>
          <h5 className="service_section_subtitle">
            Call On The Experts At IGOCLEAN
          </h5>
          <p className="mt-3 service_section_Text">
            To ensure that your office building is always a clean, healthy, and
            safe environment, trust the cleaning experts at IGOClean. We provide
            commercial cleaning services of the highest standards backed by over
            12 years of experience.
          </p>
        </div>
      </div>
      <div className="mt-5 mb-5 row">
        <div className="mx-auto mt-5 col-md-10">
          <div className="mx-auto row">
            <div className="mx-auto col-md-4">
              <img
                src={ServiceImg}
                alt="..."
                style={{
                  width: "100%",
                  overflow: "hidden",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="col-md-6">
              <h1 className="service_Sec_title">
                DISINFECTION: THE NEXT NORMAL
              </h1>
              <p className="mt-3 service_section_Text1">
                In our communities, we are deploying the best disinfectants and
                procedures to keep individuals safe in offices, schools, retail
                locations, healthcare settings, senior living facilities, and
                more. This includes our Master service, which addresses the
                cleaning, disinfection, and/or protection needs for businesses
                across the Nigeria, especially those in need of COVID-19
                cleaning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 row">
        <div className="mx-auto mt-5 col-md-8">
          <h1 className="mb-3 text-center service_Sec_title">
            WE CARE ABOUT CLEAN
          </h1>
          <div className="mx-auto row">
            <div className="mx-auto col-md-4">
              <img
                src={ServiceImg1}
                alt="..."
                style={{
                  width: "100%",
                  overflow: "hidden",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="col-md-8">
              <h5 className="service_section_subtitle1">
                Capture And Removal Cleaning System
              </h5>
              <p className="service_section_Text2">
                Using the latest technologies and procedures, including our
                proprietary{" "}
                <strong className="text-danger">
                  Capture and Removal Cleaning®
                </strong>{" "}
                system, our professional commercial cleaning services help you
                protect your customers and employees. Simply put, we care about
                clean and it shows in our work, our people, our accountability
                to you and our commitment to delivering on our word, every day.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-5 mb-3 row">
            <div className="mx-auto col-md-4">
              <img
                src={ServiceImg2}
                alt="..."
                style={{
                  width: "100%",
                  overflow: "hidden",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="col-md-8">
              <h5 className="service_section_subtitle1">
              We Work To A Higher Standard: Ours
              </h5>
              <p className="service_section_Text2">
              At IGOClean, we relentlessly pursue the highest standards in cleaning with customized programs designed to meet your needs, whether for daily, nightly or one-time <strong className="text-danger">office cleaning services</strong>. We are more than clean. We do what we say we’re going to do and follow up with each customer to confirm complete customer satisfaction.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-5 mb-3 row">
            <div className="mx-auto col-md-4">
              <img
                src={ServiceImg3}
                alt="..."
                style={{
                  width: "100%",
                  overflow: "hidden",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="col-md-8">
              <h5 className="service_section_subtitle1">
              Commercial Cleaning For Any Industry
              </h5>
              <p className="service_section_Text2">
              Whether your company makes its home in an office building, clinic or school, we deliver professional commercial cleaning services that help promote healthy work environments and keep your buildings sparkling. Our cleaning professionals are proud to offer <strong className="text-danger">Capture and Removal Cleaning®</strong>, our proprietary system that works better than standard cleaning processes. We also use green cleaning products that are highly effective without leaving behind any residue or odors. No matter what kind of facility you have, we have the tools and techniques to handle your cleaning and disinfecting responsibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfo;
