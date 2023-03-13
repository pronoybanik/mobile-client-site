import React from "react";
import img from "../../image/contact-us-support-service-and-information-connect-concept-female-s-hands-is-using-mobile-phone-and-laptop-for-corporate-information-contact-via-em.jpg";
const NeedHelp = () => {
  return (
    <div>
      <div data-aos="zoom-in-down">
        <div className=" hero h-96" style={{ backgroundImage: `url(${img})` }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl font-bold uppercase text-gray-100 font-serif">
                need to help contact with us:
              </h1>
              <p className="mb-5 text-4xl text-gray-200 font-mono">Number: 01608520719</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
