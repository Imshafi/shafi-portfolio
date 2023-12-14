import React from "react";
import "../assets/css/certificate.css";
import certificate from "../assets/images/certificate.jpg";

const Certificate = (props) => {
  return (
    <div className="certificate_main_blk">
      <div className="certificate_sub_blk">
        {props?.isMobile ? (
          <h1>-------- Certificate --------</h1>
        ) : (
          <h1>
            ------------------------- Certificate ---------------------------
          </h1>
        )}
      </div>
      <div className="certificate_image">
        <img src={certificate} />
      </div>
    </div>
  );
};

export default Certificate;
