import React from "react";
import "./CourseCard.css";
import Img from "../../assets/img/test.jpg";
import { useNavigate } from "react-router-dom";
import { COURSE_DETAIL } from "../../constants/PathConstants";
import Candel from "../../assets/img/candel.png";
const CourseCard = ({ data }) => {
  const key = Math.floor(Math.random() * 90000) + 10000;

  const nvaigate = useNavigate();

  const onClickCard = (data) => {
    console.log(key);
    nvaigate(`${COURSE_DETAIL}/${data.id}`);
  };
  return (
    <div key={key} className="card">
      <div className="course-img">
        <img alt="banner" className="banner" src={data?.img ? data?.img : Img} />
      </div>
      <img alt="icon" className="candel-icon" src={Candel} />
      <div className="course-info">
        <span className="course-title">{data?.title ?? ""}</span>
        <p className="course-subTitle">
          {data?.description}
        </p>
      </div>

      <button
        className="know-more"
        onClick={(e) => {
          onClickCard(data);
        }}
      >
        Know more...
      </button>
    </div>
  );
};

export default CourseCard;
