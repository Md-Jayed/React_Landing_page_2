import React from "react";
import "./works.css";
import Upwork from "../../img/Upwork.png";
import fiverr from "../../img/fiverr.png";
import amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import {motion} from 'framer-motion'

const Works = () => {
  const transition = {duration:3.5,type:'spring'}
  return (
    <div className="works">
      <div className="w-left">
        <div className="awesome">
          <span>Works for All these</span>
          <span>Brands & Clients</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            consequuntur,
            <br /> laudantium ipsam minima dolorem ratione harum aperiam
            architecto officia.
          </span>
          <button className="button s-button ">Hire ME</button>
          <div
            className="blur"
            style={{ background: "#C1F5FF", left: "31rem" }}
          ></div>
        </div>
      </div>
      <div
      
      className="w-right">
        <motion.div
        initial={{rotate:45}}
        whileInView={{rotate:0}}
        transition={transition}
        
        
        className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* Background circle */}
        <div className="w-backgroundCircle w-blurCircle"></div>
        <div className="w-backgroundCircle w-yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
