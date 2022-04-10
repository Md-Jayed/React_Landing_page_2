import React from "react";
import "./portfolio.css";
import sidebar from "../../img/sidebar.png"
import ecommerce from "../../img/ecommerce.png"
import musicapp from "../../img/musicapp.png"
import hoc from "../../img/hoc.png"


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="Portfolio">
      {/* heading section */}
      <span>Recent Project</span>
      <span>Portfolio</span>
      {/* swiper */}
      <Swiper
      spaceBetween={10}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
      >
        <SwiperSlide><img src={sidebar} alt="" /></SwiperSlide>
        <SwiperSlide><img src={ecommerce} alt="" /></SwiperSlide>
        <SwiperSlide><img src={musicapp} alt="" /></SwiperSlide>
        <SwiperSlide><img src={hoc} alt="" /></SwiperSlide>
    
      </Swiper>
    </div>
  );
};

export default Portfolio;
