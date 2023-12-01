// src/components/Home.js

import React from "react";
import "./Home.css"; // Подключаем файл стилей
import fakeImage from "./../../images/Home_img/Fake.png";

const Home = () => {
  return (
    <div className="home-container">

      <div className="img-container">
        <img class="Home_image" src={fakeImage} alt="" />
      </div>
      <div className="Text_home">Store</div>

      <a href="/" class="oval_link">Shop now</a>
      <a href="/latestitems" class="oval_link2">Latest items</a>

    </div>
  );
};

export default Home;
