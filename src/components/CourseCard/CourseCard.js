import React from "react";
import "./CourseCard.css";
import Img from "../../assets/img/test.jpg";
import { useNavigate } from "react-router-dom";
import Candle from "../../assets/img/candle.png";
import { useDispatch } from "react-redux";
import { setCourse } from "../../store/actions/CourseActions";
import { COURSE_DETAIL } from "../../constants/PathConstants";
import { getUniqueId } from "../../utils/CommonMethods";
const CourseCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setData = (item) => {
    dispatch(setCourse(item));
  };
  const onClickCard = (item) => {
    setData(item);
    navigate(`${COURSE_DETAIL}/${item.id}`);
  };

  return (
    <div key={getUniqueId()} className="card">
      <div className="course-img">
        <img
          alt="banner"
          className="banner"
          src={data?.imageurl ? data?.imageurl : Img}
        />
      </div>
      <img alt="icon" className="candle-icon" src={Candle} />
      <div className="course-info">
        <label className="course-title">{data?.title}</label>
        <label className="course-subTitle">{data?.description}</label>
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
