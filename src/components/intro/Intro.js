import React from "react";
import "./intro.css";
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FlotingDiv from "../flotingDIv/FlotingDiv";
import { motion } from "framer-motion"

const Intro = () => {
  const transition = { duration: 2,type:'spring'}
  return (
    <div className="intro" >
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I am</span>
          <span>Jayed Hossen</span>
          <span>
            Frontend Developer with hight level of experience in web designing
            and development,producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
           <a href="https://github.com/md-jayed" target='_blank'> <img src={Github} alt="" /></a>
            <a href="https://www.linkedin.com/feed/"><img src={Linkedin} alt="" /></a>
            <a href=""><img src={Instagram} alt="" /></a>
        </div>
      </div>
      <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <motion.img
          initial={{left:'-25%'}}
          whileInView={{left:'-14%'}}
          transition={transition}
          src={glassesimoji} alt="" />
          <motion.div 
          initial={{left:'85%'}}
          whileInView={{left:'70%'}}
          transition={transition}
          className="floating-div"
          style={{top:'-4%',left:'70%'}}>
              <FlotingDiv img={crown} text1={"Web"} text2={"developer"}/>
             
          </motion.div>
          <motion.div 
          initial={{left:'70px'}}
          whileInView={{left:'33px'}}
          transition={transition}
          
          style={{top: '333px', left: '33px'}}>
              <FlotingDiv img={thumbup} text1={"Best designer"} text2={"Awer"}/>
          </motion.div>
          <div className="blur i-blue" style={{background:'rgb(238 210 255)'}}></div>
          <div className="blur" style={{
            background:'#C1F5FF',
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'
            }}></div>
      </div>
    </div>
  );
};

export default Intro;
