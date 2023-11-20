import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Panaderia GUT MAN expertos en reposteria y alimentos congelados
          </h1>
          <p className="primary-text">
          Bienvenido a Gut MAN, tu destino irresistible para experiencias de panadería auténticas y deliciosas. En Gut MAN, nos enorgullece ofrecer una amplia variedad de panes frescos y productos horneados, elaborados con ingredientes de la más alta calidad y con el toque artesanal que nos distingue.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
