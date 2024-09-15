import React, { useState } from "react";
import "./AboutUs.css";
import Approach from "../../assets/img/bg-approach.png";
import DividerOrange from "../../assets/img/deviderOrange.png";
import Img from "../../assets/img/person.png";
const AboutUs = () => {

    const [teamData , setTeamData] = useState([1,1,1,])



  const TextStyling = (props) => {
    if (typeof props.text !== "string") {
      console.error("Expected a string");
      return null; // or handle the error appropriately
    }
    const [firstWord, ...remainingWords] = props.text?.split(" ");
    const remainingText = remainingWords?.join(" ");

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
      <li>
        <img src={Img} />
        <div>
          <h2>Name</h2>
          <h4>Designation</h4>
          <p>
            If you aren't satisfied with the build tool and configuration
            choices, you can eject at any time. This command will remove the
            single build dependency from your project. Instead, it will copy all
            the configuration files and the transitive dependencies (webpack,
            Babel, ESLint, etc) right into your project so you have full control
            over them. All of the commands except eject will still work, but
            they will point to the copied scripts so you can tweak them. At this
            point you're on your own. You don't have to ever use eject. The
            curated feature set is suitable for small and middle deployments,
            and you shouldn't feel obligated to use this feature. However we
            understand that this tool wouldn't be useful if you couldn't
            customize it when you are ready for it.
          </p>
        </div>
      </li>
    ));
  };
  return (
    <div className="about-container">
      <div className="approach-wrapper">
        <div className="approach">
          <TextStyling
            text={"Our APPROACH"}
            class={"text-container-center"}
            style={{ color: "var(--primary)" }}
          />
          <p>
            We are a unique biend of theorotical knowledge and hands-on
            experience Our curriculum is deisgned to cater to traders of all
            levels - from biginner just starting out to seasoned professinals
            looking to refine their stategies. Each course is structured to
            provide a balanced mix of lecture exercises and real-time trading
            simulation.
          </p>
          <img src={Approach} />
        </div>
        <img src={DividerOrange} className="dividerOrange" />
      </div>

      <div className="team-wrapper">
        <div>
          <TextStyling
            text={"Meet OUR TEAM"}
            class={"text-container-center"}
            style={{ color: "var(--white)" }}
          />
        </div>

        <div className="team-list">
          <ul>
            {teamList(teamData)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
