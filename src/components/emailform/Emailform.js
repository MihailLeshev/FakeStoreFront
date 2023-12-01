import React, { useState } from "react";
import axios from "axios";
import "./Emailform.css";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/submit_form/", formData)
      .then((response) => {
        console.log(response.data);
        // Обработка успешной отправки формы
        setFormSubmitted(true);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Обработка ошибки отправки формы
      });
  };

  return (
    <div className="container">
      {formSubmitted ? (
        <div>
          <p>Your question send!</p>
          {/* Здесь вы можете добавить табличку или другие элементы, которые хотите отобразить после отправки формы */}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="name_1" htmlFor="name">Enter your name:</label>
          <input className="name_2"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className="name_1" htmlFor="email">Enter your email:</label>
          <input className="name_2"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="name_1" htmlFor="question">Enter your question:</label>
          <textarea className="name_2"
            id="question"
            name="question"
            rows="4"
            value={formData.question}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default EmailForm;
