import React, { useState } from "react";
import "../assets/css/navbar.css";
import { AiOutlinePartition, AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [navbarIcon, setNavbarIcon] = useState(false);

  const isMobile = window.navigator.userAgent.toLowerCase().includes("mobi");
  console.log("..................isMobile", isMobile);
  const navbar = [
    { label: "Home", class: "home" },
    { label: "About", class: "about" },
    { label: "Services", class: "services" },
    { label: "Contact", class: "contact" },
  ];

  return (
    <div className="header_main_blk">
      <div className="header_sub_blk">
        <div className="logo_img">
          {/* <img src={} /> */}
          <AiOutlinePartition size={30} />
        </div>
        <div className="navbar_main_blk">
          <div className="navbar_mobile_icon">
            {navbarIcon ? (
              <RxCross2 size={30} onClick={() => setNavbarIcon(false)} />
            ) : (
              <AiOutlineMenu size={30} onClick={() => setNavbarIcon(true)} />
            )}
          </div>
          <div className={navbarIcon ? "mobile_navbar" : "navbar_blk"}>
            <ul>
              {navbar?.map((obj, i) => (
                <li key={i}>
                  <a href="#">{obj.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
