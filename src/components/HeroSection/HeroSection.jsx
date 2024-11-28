// src/components/HeroSection.jsx
import React from "react";
import s from "./HeroSection.module.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className={s.hero}>
      <div className="container">
        <div className={s.wrapper}>
          <h1 className="h1">Campers of your dreams</h1>
          <h2 className="h2">
            You can find everything you want in our catalog
          </h2>
        </div>
        <Link to="/catalog">
          <button className="button">View Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
