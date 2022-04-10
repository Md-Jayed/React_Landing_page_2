import React from "react";
import "./services.css";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import heartemoji from "../../img/heartemoji.png";
import Card from "../card/Card";
import {motion} from 'framer-motion';
const Services = () => {
  const transition = { duration: 2,type:'spring'}
  return (
    <div className="services" >
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          consequuntur,<br /> laudantium ipsam minima dolorem ratione harum aperiam
          architecto officia.
        </span>
        <button className="button s-button">Download CV</button>
        
      </div>
      {/* right side */}
      <div className="cards" id="Services">
        <div className="blur" style={{background:'rgb(238 210 255)',left:'31rem'}}></div>
        <div className="blur" style={{background:'#C1F5FF',left:'-22rem',top:'14rem'}}></div>
        <motion.div
        initial={{left:'10'}}
        whileInView={{left:'25rem'}}
        transition={transition}
        viewport={{margin:'-40px'}}
        
        
        style={{top:'-34%',left:'25rem'}}>
        <Card emoji={heartemoji} heading={'Design'} details={"Figma,Skatch, Adobe Xd, Illustrator"}/>
        </motion.div>
        <motion.div
        initial={{left:'25rem'}}
        whileInView={{left:'17rem'}}
        transition={transition}
        
        style={{top:'80%',left:'17rem'}}>
        <Card emoji={glasses} heading={'Developer'} details={"Html,Css,JavaScript,React MeterialUI"}/>
        </motion.div>
        <motion.div
        initial={{left:'17rem'}}
        whileInView={{left:'8rem'}}
        transition={transition}
        
        style={{top:'-34%',left:'8rem'}}>
        <Card emoji={humble} heading={'UI/UX'} details={"Photoshop,Skatch Adobe Xd,Illustrator"}/>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
