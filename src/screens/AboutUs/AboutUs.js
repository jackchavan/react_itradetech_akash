import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import Approach from "../../assets/img/bg-approach.png";
import DividerOrange from "../../assets/img/deviderOrange.png";
import Img from "../../assets/img/person.png";
import { getTeammembers } from "../../services/userService";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/actions/CommonActions";

const AboutUs = () => {
  const dispatch = useDispatch();

  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    getTeam();
  }, []);

  const getTeam = async () => {
    dispatch(setLoading(false));

    try {
      const response = await getTeammembers();
      if (response) {
        setTeamData(response);
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
    }
  };
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
    return data?.map((item, i) => (
      <li className="list-group-item d-flex align-items-start" key={i}>
        <img
          src={item.imageUrl ? item.imageUrl : Img}
          alt="Team Member"
          className="me-3 team-img"
        />
        <div>
          <h2>{item.name}</h2>
          <h4>{item.designation}</h4>
          <p>{item.description}</p>
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
          {teamData.length > 0 && (
            <ul className="list-group">{teamList(teamData)}</ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
