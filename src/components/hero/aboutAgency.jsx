import React from "react";
import AboutImg from "../../assets/img6.jpg";

const AboutAgency = () => {
  return (
    <div className="container py-5 mt-3">
        <h1 className="mb-5 text-center about_title">
          THE CLEANING COMPANY IN NIGERIA YOU CAN TRUST
        </h1>
      <div className="mt-3 row">
        <div className="mt-3 col-md-6">
          <p className="about_text">
            Established in 2001, IGOCLEAN has become one of the most successful,
            dynamic and professional cleaning company in Nigeria. We offer an
            unbeatable service, reliability and levels of customer care that
            have set an industry standard. We provide quality commercial and
            domestic cleaning services to all Central and Greater Nigeria areas
            including Home Counties. IGOCLEAN aims to introduce only dependable,
            honest and professional cleaners to our clients.
            <br />
            <br />
            In nearly two decades of rapid growth, our reputation and client
            list had grown from strength to strength. Our domestic cleaning
            division is also a big part of our success, and we provide
            efficient, reliable and flexible solutions to homeowners across the
            capital.
            <br />
            <br />
            Choosing IGOCLEAN means you are opting to use one of the most
            experienced cleaning companies in Nigeria, and we have the track
            record and experience to back that claim up! However, there is a
            multitude of other compelling reasons to use our recommended
            cleaning services and expert cleaners.
          </p>
        </div>
        <div className="mt-3 col-md-6">
          <div>
            <img
              src={AboutImg}
              alt="..."
              className="about_image"
              style={{
                maxWidth: "600px",
                heigh: "auto",
                width: "100%",
                boxShadow: "0px 5px 20px 0px rgb(69 67 96 / 10%)",
                overflow: "hidden",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
          <div className="row">
          <div className="mt-3 col-md-12">
          <h1 className=" about_title1">
          WHY CHOOSE IGOCLEAN?
        </h1>
        <ul>
            <li><strong>Proven experience and quality service since 2001.</strong></li>
            <li>Our cleaning company provides bespoke services to a vast range of organisations from across the private and public sector in London and Home Counties.</li>
            <li>80% of our clients are derived from referrals.</li>
            <li>We build and encourage strong relationships. We will listen to your needs and requirements, and will always give you the most accurate estimate of your costs as is possible. We will ensure that you are given practical and realistic advice.</li>
            <li>Reliability – our cleaning services are provided on time and budget.</li>
            <li>FastKlean is up-to-date with the very latest materials and equipment.</li>
            <li>We treat every assigned contract individually and with the utmost care in order to ensure customer satisfaction.</li>
            <li>We guarantee all of our work.</li>
            <li>Our cleaning company takes precaution in making sure that all our operatives carry out their actions skilfully, and all Health & Safety measures are recognised and correctly tracked.</li>
            <li>Accreditations – we are fully accredited members of all recognised organisations and hold all necessary and relevant certifications.</li>
            <li>Our cleaning company in London prides itself on offering brilliant value for money. Click here to check out our reasonable cleaning rates and exceptionally competitive and honest hourly prices.</li>
            <li>We provide flexible payment methods.</li>
        </ul>
          </div>

          </div>
    </div>
  );
};

export default AboutAgency;
