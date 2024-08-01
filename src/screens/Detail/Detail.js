import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import Img from "../../assets/img/course2.jpg";
const Detail = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);

  const card = () => {
    return (
      <div className="card-deatil">
        <img className="img" src={Img} />
        <div className="sub-section">
        <span>&#8377; {"1200"}</span>
        <button className="btn-enroll-now">Enroll Now</button>

        </div>
      </div>
    );
  };
  return (
    <div className="detail-continer">
      <div className="detail-box">
        <div className="desc-div">
          <span className="title">Title</span>
          <span className="description">
            10 Hours of React just added. Become a Developer With ONE course -
            HTML, CSS, JavaScript, React, Node, MongoDB and More!
          </span>
        </div>

        <div className="syllabus-div"></div>
      </div>
      {card()}
    </div>
  );
};

export default Detail;
