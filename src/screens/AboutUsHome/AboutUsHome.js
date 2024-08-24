import React from "react";
import "./AboutUsHome.css";
import AboutDevider from "../../assets/img/deviderGrey.png";

const AboutUsHome = () => {
  return (
    <div className="about-home">
      <img className="aboutDevider" src={AboutDevider} alt="devider"/>

      <div className="aboutHome-continer">
        <h3 className="about-home-title">About</h3>
        <h3 className="about-subtitle">I TRADE TECH ACADEMY</h3>

        <p>
          At <strong>I TRADE TECH ACADEMY</strong>, we empower aspiring traders
          and seasoned professionals alike with the knowledge, tools, and
          confidence to succeed in the financial markets. Whether you're looking
          to start your trading journey or refine your strategies, our Academy
          offers comprehensive training programs tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default AboutUsHome;
