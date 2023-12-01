import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import "./Latestitems.css"; // Подключаем файл стилей
import img1 from "./../../images/latestitems_img/1.png";
import img2 from "./../../images/latestitems_img/2.png";
import img3 from "./../../images/latestitems_img/3.png";
import img4 from "./../../images/latestitems_img/4.png";
import ilon from "./../../images/latestitems_img/ilon.png";
import t1 from "./../../images/latestitems_img/t1.png";
import t2 from "./../../images/latestitems_img/t2.jpg";
import t3 from "./../../images/latestitems_img/t3.jpg";
import mer1 from "./../../images/latestitems_img/mer1.png";
import m1 from "./../../images/latestitems_img/m1.png";
import m2 from "./../../images/latestitems_img/m2.png";
import m3 from "./../../images/latestitems_img/m3.png";
import r from "./../../images/latestitems_img/r.png";
import r1 from "./../../images/latestitems_img/r1.png";
import r2 from "./../../images/latestitems_img/r2.png";
import r3 from "./../../images/latestitems_img/r3.png";
const Latestitems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Интервал автопрокрутки в миллисекундах
    arrows: false, 
  };

  return (
    <div className="itemsContainer">

      <div className="item_text">Get the Most Out of Life</div>
      <div className="item_border"></div>
      <div className="item_text2">Stop for a moment enjoying the beauty</div>
      <div className="img_container">
        <img class="img_latest" src={img1} alt="" />
        <img class="img_latest" src={img2} alt="" />
        <img class="img_latest" src={img3} alt="" />
        <img class="img_latest" src={img4} alt="" />
      </div>
      <div className="item_border2"></div>
      <div className="item_text3">
        Whenever you want to arrive in style, enjoy the luxury of an electric
        ride with Tesla Model X.
      </div>
      <div className="item_text3">
        From the S to the Roadster, Tesla brought a lot of surprises with every
        new car it develops.
      </div>
      <img className="img_ilon" src={ilon} alt="" />

      <Slider {...settings}>
        <div>
          <img className="tesla" src={t1} alt="" />
        </div>
        <div>
          <img className="tesla" src={t2} alt="" />
        </div>
        <div>
          <img className="tesla" src={t3} alt="" />
        </div>
        {/* Добавьте дополнительные слайды, если необходимо */}
      </Slider>

      <div className="item_text3">
        Whenever you want to arrive in style, enjoy the luxury of an electric
        ride with Tesla Model X.
      </div>
      <div className="item_text3">
        From the S to the Roadster, Tesla brought a lot of surprises with every
        new car it develops.
      </div>
      <img className="img_ilon" src={mer1} alt="" />

      <Slider {...settings}>
        <div>
          <img className="tesla" src={m1} alt="" />
        </div>
        <div>
          <img className="tesla" src={m2} alt="" />
        </div>
        <div>
          <img className="tesla" src={m3} alt="" />
        </div>
        {/* Добавьте дополнительные слайды, если необходимо */}
      </Slider>

      <div className="item_text3">
      The Rolls-Royce 103EX is a limited edition model based on the Ghost. 
      The 103EX is equipped with a high power engine and can reach speeds up 
      to 910km/hr. It also comes equipped with a black and gold interior that's 
      incredibly luxurious and comfortable.
      </div>
      <img className="img_ilon" src={r} alt="" />

      <Slider {...settings}>
        <div>
          <img className="tesla" src={r1} alt="" />
        </div>
        <div>
          <img className="tesla" src={r2} alt="" />
        </div>
        <div>
          <img className="tesla" src={r3} alt="" />
        </div>
        {/* Добавьте дополнительные слайды, если необходимо */}
      </Slider>
      <div className="pusto"></div>

    </div>
  );
};

export default Latestitems;
