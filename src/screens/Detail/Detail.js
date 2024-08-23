import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import Img from "../../assets/img/course2.jpg";
import { useDispatch } from "react-redux";
import { getCourseDetail } from "../../services/courseService";
import { setLoading } from "../../store/actions/CommonActions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [list, setList] = useState([
    "Build 16 web development projects for your portfolio",
    "ready to apply for junior developer jobs. Learn the latest technologies",
    "including Javascript, React, Node and even Web3 development",
    "Build 16 web development projects for your portfolio",
  ]);

  const [courseDetail, setCourseDetail] = useState({})


  const detilsData = [
    {
      icon: "fa fa-clock-o",
      label: "Duration",
      value: `${courseDetail?.duration} minutes`,
    },
    {
      icon: "fa fa-book",
      label: "Lecture",
      value: "2",
    },
    {
      icon: "fa fa-play-circle-o",
      label: "Mode",
      value: `${courseDetail?.mode}`,
    },
    {
      icon: "fa fa-tachometer",
      label: "Level",
      value: "Beginner",
    },
  ];

  useEffect(() => {
    getDetail(id);
  }, []);

  const getDetail = async (id) => {
    dispatch(setLoading(true));

    try {
      const response = await getCourseDetail(id);
      if (response) {
        setCourseDetail(response)
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));

      console.error(error);
      return false;
    }
  };
  const cardDetails = () => {
    return detilsData.map((item, i) => (
      <div className="list-item">
        <span className="item-icon">
          <i className={item.icon}></i>
        </span>
        <span className="item-name">{item.label}</span>
        <span className="item-value">{item.value}</span>
      </div>
    ));
  };

  const card = () => {
    return (
      <div className="card-deatil">
        <img className="img-detail" src={Img} />
        <div className="sub-section">
          <span className="rupee">&#8377; {courseDetail?.cost}</span>
          <div className="card-details">{cardDetails()}</div>
          <button className="btn-enroll-now">Enroll Now</button>
        </div>
      </div>
    );
  };

  const learnList = () => {
    return list.map((item, i) => <li key={i} className="li-learn">{item}</li>);
  };

  return (
    <div className="detail-continer">
      <div className="detail-box">
        <div className="desc-div">
          <span className="title">{courseDetail?.title}</span>
          <span className="description">
            {courseDetail.description}
          </span>
        </div>
      </div>
      {card()}
      <div className="syllabus-div">
        <h3>What you'll learn</h3>
        <div>
          <ul className="ul-learn">{learnList()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
