import React, { useState } from "react";
import "./AboutUs.css";
import Approach from "../../assets/img/bg-approach.png";
import DividerOrange from "../../assets/img/deviderOrange.png";
import Img from "../../assets/img/person.png";

const AboutUs = () => {
  const [teamData, setTeamData] = useState([1, 1, 1]);

  const TextStyling = (props) => {
    if (typeof props.text !== "string") {
      console.error("Expected a string");
      return null; // or handle the error appropriately
    }
    const [firstWord, ...remainingWords] = props.text.split(" ");
    const remainingText = remainingWords.join(" ");

    return (
      <div className={props.class}>
        <span className="first">{firstWord}</span>
        <span className="remaining" style={props.style}>
          {remainingText}
        </span>
      </div>
    );
  };

  const teamList = (data) => {
    return data.map((item, i) => (
      <li className="list-group-item d-flex align-items-start" key={i}>
        <img src={Img} alt="Team Member" className="me-3 team-img" />
        <div>
          <h2>Name</h2>
          <h4>Designation</h4>
          <p>
            If you aren't satisfied with the build tool and configuration
            choices, you can eject at any time. This command will remove the
            single build dependency from your project. Instead, it will copy all
            the configuration files and the transitive dependencies (webpack,
            Babel, ESLint, etc) right into your project so you have full control
            over them...
          </p>
        </div>
      </li>
    ));
  };

  return (
    <div
      className="container-fluid text-center g-0"
      style={{ backgroundColor: "var(--bg-pink)" }}
    >
      <div className="approach-wrapper">
        <div className="approach">
          <TextStyling
            text={"Our APPROACH"}
            class={"text-container-center"}
            style={{ color: "var(--primary)" }}
          />
          <p className="intro">
            We are a unique blend of theoretical knowledge and hands-on
            experience. Our curriculum is designed to cater to traders of all
            levels - from beginners just starting out to seasoned professionals
            looking to refine their strategies. Each course is structured to
            provide a balanced mix of lecture exercises and real-time trading
            simulation.
          </p>
          <img
            src={Approach}
            alt="Approach"
            className="img-fluid img-radious"
          />
        </div>
        <img
          src={DividerOrange}
          alt="Divider"
          className="dividerOrange img-fluid"
        />
      </div>

      <div
        className="team-wrapper"
        style={{ backgroundColor: "var(--primary)", marginTop: "-0.7rem" }}
      >
        <TextStyling
          text={"Meet OUR TEAM"}
          class={"text-container-center"}
          style={{ color: "var(--white)" }}
        />

        <div className="team-list">
          <ul className="list-group">{teamList(teamData)}</ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
