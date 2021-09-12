import React from "react";
import OurServices from "../../assets/img6.jpg";

const Ourservices = () => {
  return (
    <div className="py-5 ourservice__container">
      <div className="container">
        <p className="ourservice__text">
          Our cost effective and reliable cleaning services that we aim to
          provide to all clients are as follow:
        </p>
        <div className="py-3 row">
          <div className="col-md-6">
            <ul className="ourservice__text">
              <li className="ourservice__text">House cleaning</li>
              <li className="ourservice__text">Carpet and upholstery cleaning</li>
              <li className="ourservice__text">Window cleaning services</li>
              <li className="ourservice__text">Oven cleaning </li>
              <li className="ourservice__text">End of tenancy cleans</li>
              <li className="ourservice__text">Specialist hard floor cleans</li>
              <li className="ourservice__text">After builders and construction cleans</li>
              <li className="ourservice__text">Commercial, office and contract cleaning services</li>
              <li className="ourservice__text">PC/Computer cleaning services</li>
              <li className="ourservice__text">Driveway and patio cleaning services</li>
              <li className="ourservice__text">Graffiti removal</li>
              <li className="ourservice__text">Party helpers, bartenders and waiters</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img
              src={OurServices}
              alt="ourservices"
              style={{
                maxWidth: "600px",
                height: "auto",
                width: "100%",
                boxShadow: "0px 5px 20px 0px rgb(69 67 96 / 10%)",
                overflow: "hidden",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <p className="ourservice__text">Feel free to contact our friendly customer support team on (+234) 808 609 7376 for more information about our cleaning services and a Free Quote. You can also use our live chat to get in touch with us or complete the online contact form here.</p>
      </div>
    </div>
  );
};

export default Ourservices;
