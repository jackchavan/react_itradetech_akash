import React from "react";
import "./CourseCard.css";
import Img from "../../assets/img/test.jpg";
import { useNavigate } from "react-router-dom";
import Candel from "../../assets/img/candel.png";
import { useDispatch, useSelector } from "react-redux";
import { setCourse } from "../../store/actions/CourseActions";
import { COURSE_DETAIL, LOGIN } from "../../constants/PathConstants";
import { getUniqueId } from "../../utils/CommonMethods";
const CourseCard = ({ data }) => {
  const { auth } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setData = (item) => {
    dispatch(setCourse(item));
  };
  const onClickCard = (item) => {
    if (auth?.login) {
      setData(item);
      navigate(`${COURSE_DETAIL}/${item.id}`);
    } else {
      setData(item);
      navigate(LOGIN);
    }
  };

  return (
    <div key={getUniqueId()} className="card">
      <div className="course-img">
        <img
          alt="banner"
          className="banner"
          src={data?.img ? data?.img : Img}
        />
      </div>
      <img alt="icon" className="candel-icon" src={Candel} />
      <div className="course-info">
        <span className="course-title">{data?.title ?? ""}</span>
        <p className="course-subTitle">{data?.description}</p>
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
