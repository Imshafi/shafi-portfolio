import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <div className="footer_main_blk">
      <div></div>
      <div>
        <input type="text" placeholder="Please enter name..." />
        <input type="email" placeholder="Please enter email..." />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Footer;
