import React from "react";
import FormInput from "../FormInput/FormInput";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text-wrapper">
        
        <h1 className="hero-heading">Unlimited movies, TV shows and more.</h1>
        <p className="hero-desc">Watch anywhere. Cancel anytime.</p>
      </div>
      <FormInput/>
    </div>
  );
};

export default Hero;
