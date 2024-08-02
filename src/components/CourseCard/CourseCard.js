import React from "react";
import "./CourseCard.css";
import Img from "../../assets/img/test.jpg";
import { useNavigate } from "react-router-dom";
import { COURSE_DETAIL } from "../../constants/PathConstants";
const CourseCard = ({ data }) => {
  const key = Math.floor(Math.random() * 90000) + 10000;

  const nvaigate = useNavigate();

  const p =
    "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps";

  const onClickCard = (data) => {
    console.log(key);
    nvaigate(COURSE_DETAIL);
  };
  return (
    <div
      key={key}
      className="card"
      onClick={(e) => {
        onClickCard(data);
      }}
    >
      <img className="banner" src={data?.img ? data?.img : Img} />
      <div className="course-info">
        <span className="course-title">{data?.title ?? ""}</span>
        <p className="course-description">
          {data?.duration ?? p.substring(0, 30).concat("...")}
        </p>
        <span>₹ {data.price ?? ""}</span>
      </div>
    </div>
  );
};

export default CourseCard;
