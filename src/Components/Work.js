import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Degusta en Nuestros Puntos de venta",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Selecciona Tu pedido",
      text: "Dejate llevar por nuestra gran variedad de productos y satisface a tu niño interior",
    },
    {
      image: DeliveryMeals,
      title: "Domicilios",
      text: "Permitenos llevar la alegria hasta la puerta de tu casa",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Metodos de Trabajo</p>
        <h1 className="primary-heading">Como trabajamos</h1>
        <p className="primary-text">
        Una vez que los productos han pasado nuestro estricto control de calidad, se distribuyen de manera eficiente para llegar a nuestras tiendas y clientes. Mantenemos una cadena de suministro cuidadosamente gestionada para garantizar la frescura y la disponibilidad constante de los productos Gut MAN.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
