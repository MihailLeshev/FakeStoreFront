// src/components/Home.js

import React from "react";
import "./Loginmenu.css"; // Подключаем файл стилей

const Loginmenu = () => {
  return (
    <div className="CONT">
      <div className="log_text">Sign in to FakeStore</div>
      <div className="login-container">
        <form class="login-form" />
        <label className="name_1" htmlFor="name">E-mail address</label>
        <input className="user_css" type="text" placeholder="Username" required />
        <label className="name_1" htmlFor="name">Password</label>
        <input className="user_css" type="password" placeholder="Password" required />
        <button className="btn_text" type="submit">Login</button>
        <form />
      </div>

      <a href="/registerform" className="register-link">
        Or create an account
      </a>
    </div>
  );
};

export default Loginmenu;
