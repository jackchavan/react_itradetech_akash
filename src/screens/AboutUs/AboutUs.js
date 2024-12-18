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

  const [boardOfAdvisory, setBoardOfAdvisory] = useState([]);
  const [boardOfDirector, setBoardOfDirector] = useState([]);

  useEffect(() => {
    getTeam();
  }, []);

  const getTeam = async () => {
    dispatch(setLoading(true));

    try {
      const response = await getTeammembers();
      if (response) {
        const advisory = response
          .filter((member) => member.designation === "Board of Advisory")
          .map((member) => ({ ...member, isExpanded: false }));

        const director = response
          .filter((member) => member.designation === "Board of Director")
          .map((member) => ({ ...member, isExpanded: false }));

        setBoardOfAdvisory(advisory);
        setBoardOfDirector(director);
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

  const handleToggle = (item) => {
    if (item.designation === "Board of Advisory") {
      setBoardOfAdvisory((prevBoardOfAdvisory) =>
        prevBoardOfAdvisory.map((i) =>
          i.name === item.name ? { ...i, isExpanded: !i.isExpanded } : i
        )
      );
    }

    if (item.designation === "Board of Director") {
      setBoardOfDirector((prevBoardOfDirector) =>
        prevBoardOfDirector.map((i) =>
          i.name === item.name ? { ...i, isExpanded: !i.isExpanded } : i
        )
      );
    }
  };

  const teamList = (data) => {
    return data?.map((item, i) => (
      <li className="list-group-item d-flex align-items-start" key={i}>
        <img
          src={item.imageUrl ? item.imageUrl : Img}
          alt="Team Member"
          className="me-3 team-img"
        />
        <div className="item-detail">
          <h2>{item.name}</h2>
          <h4>{item.designation}</h4>
          <p className={`content ${item.isExpanded ? "expanded" : ""}`}>
            {item.description}
          </p>
          <span className="read-more" onClick={() => handleToggle(item)}>
            {item.isExpanded ? "Read Less" : "Read More"}
          </span>
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
      >
        <TextStyling
          text={"Meet OUR TEAM"}
          class={"text-container-center"}
          style={{ color: "var(--white)" }}
        />

        <div className="col col-md-12 list-row-view">
          <div className="team-list col-md-6">
            {boardOfDirector.length > 0 && (
              <ul className="list-group">{teamList(boardOfDirector)}</ul>
            )}
          </div>
          <div className="verticalDivider"></div>
          <div className="team-list col-md-6">
            {boardOfAdvisory.length > 0 && (
              <ul className="list-group">{teamList(boardOfAdvisory)}</ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
