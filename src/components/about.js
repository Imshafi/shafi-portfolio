import React from "react";
import "../assets/css/about.css";
import ABOUT_IMG from "../assets/images/cropped_image (1).png";
import MOBILE_ABOUT_IMG from "../assets/images/about_img.jpg";
const About = (props) => {
  return (
    <div className="about_main_blk" id="about">
      <div className="about_sub_blk">
        <div className="about_name_blk">
          <div className="about_name_sub_blk">
            <h1>Shaik Shafi</h1>
            <p>Software Developer @Careers360</p>
          </div>
        </div>
        {props?.isMobile ? (
          <div className="mobile_img_blk">
            <p>
              <img src={MOBILE_ABOUT_IMG} alt="no img" />
            </p>
          </div>
        ) : (
          <div className="about_img_blk">
            <p>
              <img src={ABOUT_IMG} alt="no img" />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
