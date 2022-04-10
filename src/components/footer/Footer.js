import React from "react";
import "./footer.css";
import wave from "../../img/wave.png";
import Facebook from "../../img/Facebook.png";
import fiverr from "../../img/fiverr.png";
import github from "../../img/github.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-container">
        <div className="f-details">
          <span>Md Jayed Hossen</span>
          <span>Address : Satkania</span>
          <span>contact No. 01775148286</span>
        </div>
        <div className="f-icon">
          <img src={Facebook} alt="" />
          <img src={github} alt="" />
          <img src={fiverr} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
