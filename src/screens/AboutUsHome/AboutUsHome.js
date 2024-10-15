import React from "react";
import "./AboutUsHome.css";
import AboutDevider from "../../assets/img/deviderGrey.png";

const AboutUsHome = () => {
  return (
    <div classNameName="container my-5 mt-10">
      <div className="row">
        <div className="col-12 col-md-8 mx-auto d-flex flex-column">
          <label className="text-center about-home-title">About</label>
          <label className="text-center about-subtitle">I TRADE TECH ACADEMY</label>

          <p className="text-justify p-2 p-md-4">
            At <strong>I TRADE TECH ACADEMY</strong>, we empower aspiring
            traders and seasoned professionals alike with the knowledge, tools,
            and confidence to succeed in the financial markets. Whether you're
            looking to start your trading journey or refine your strategies, our
            Academy offers comprehensive training programs tailored to your
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
