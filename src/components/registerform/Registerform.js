import React from "react";
import "./Registerform.css";

const Registerform = () => {
  return (
    <div className="CONT2">
      <div className="log_text">Create your new account</div>
      <div className="registration-container">
        <h2>Registration</h2>
        <form className="registration-form">
          <label className="name_1" htmlFor="name">First Name</label>
          <input className="colonka_reg" type="text" placeholder="First Name" required />
          <label className="name_1" htmlFor="name">Last Name</label>
          <input className="colonka_reg" type="text" placeholder="Last Name" required />
          <label className="name_1" htmlFor="name">Phone Number</label>
          <input className="colonka_reg" type="tel" placeholder="Phone Number" required />
          <label className="name_1" htmlFor="name">Email</label>
          <input className="colonka_reg" type="email" placeholder="Email" required />
          <label className="name_1" htmlFor="name">Password</label>
          <input className="colonka_reg" type="password" placeholder="Password" required />
          <label className="name_1" htmlFor="name">Confirm Password</label>
          <input className="colonka_reg" type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
        </form>
      </div>

      <a href="/loginmenu" className="register-link">
        Or login at account
      </a>

    </div>
  );
};

export default Registerform;
