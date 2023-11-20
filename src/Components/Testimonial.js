import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Comentarios</p>
        <h1 className="primary-heading">Que se Dice de Nosotros?</h1>
        <p className="primary-text">
          Ecxelente.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "¡Gut MAN es mucho más que una panadería; es un verdadero deleite para los sentidos! Cada visita se convierte en una experiencia culinaria inolvidable gracias a la increíble variedad de panes frescos y productos horneados que ofrecen. La calidad excepcional de los ingredientes y el toque artesanal en cada creación son evidentes, haciendo que cada bocado sea una explosión de sabores deliciosos. El personal amable y el ambiente acogedor hacen que Gut MAN sea el lugar perfecto para disfrutar de momentos especiales con pan de calidad superior. ¡Una joya panadera que recomendaría a todos los amantes del buen pan y la excelencia culinaria!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Camilo Rodriguez</h2>
      </div>
    </div>
  );
};

export default Testimonial;
