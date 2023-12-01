import React from "react";
import "./Contact.css";
import dollar from "../../images/contact/1.png"
import mail from "../../images/contact/mail.png"

const Contact = () => {
  return (
    <div className="Container_contact">
      <div className="text_contact">Feel free to ask any questions.</div>
      <div className="block_contant">
        <img className="dollar" src={dollar} alt="Изображение" />
        <div className="block_contant_text">leshchev.miahil@mail.ru</div>
        <a href="/emailform" class="oval_link_contact">Write a message</a>
        
        <img className="mail" src={mail} alt="Изображение" />
      </div>
    </div>
  );
};

export default Contact;
