import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tienes alguna Pregunta?</h1>
      <h1 className="primary-heading">Permitenos ayudarte</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="GutmanPanaderia@gmail.com" />
        <button className="secondary-button">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
