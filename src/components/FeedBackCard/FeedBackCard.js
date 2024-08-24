import "./FeedBackCard.css";
import React from "react";
import Img from "../../assets/img/circleimg.png";
const FeedBackCard = ({ data }) => {
  const key = Math.floor(Math.random() * 90000) + 10000;

  return (
    <div key={key} className="feedback-card">
      <div className="feedback-img">
        <img alt="img" src={Img} />
      </div>
      <p>{data.comment} </p>
      <h1>{data.name}</h1>
    </div>
  );
};

export default FeedBackCard;
