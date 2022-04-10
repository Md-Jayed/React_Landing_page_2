import React from "react";
import "./testimonial.css";
import profile5 from "../../img/profile5.jpg";
import profile6 from "../../img/profile6.jpg";
import profile3 from "../../img/profile3.jpg";
import profile4 from "../../img/profile4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const clients = [
    {
      img: profile5,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum asperiores iusto adipisci sapiente illum nam omnis itaque, laboriosam a impedit. `,
    },
    {
      img: profile6,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum asperiores iusto adipisci sapiente illum nam omnis itaque, laboriosam a impedit. `,
    },
    {
      img: profile3,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum asperiores iusto adipisci sapiente illum nam omnis itaque, laboriosam a impedit.`,
    },
    {
      img: profile4,
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum asperiores iusto adipisci sapiente illum nam omnis itaque, laboriosam a impedit. `,
    },
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
