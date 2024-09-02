import "./FeedBackCard.css";
import React from "react";
import Img from "../../assets/img/circleimg.png";
import Comma from "../../assets/img/comma.png";
import InvertedComma from "../../assets/img/invertedComma.png";

import ReactStars from "react-rating-stars-component";
import { getUniqueId } from "../../utils/CommonMethods";

const FeedBackCard = ({ data }) => {

  return (
    <div key={getUniqueId()} className="feedback-card">
      <div className="feedback-img">
        <img alt="img" src={Img} />
      </div>
      <img className="comma" alt="comma" src={Comma} />
      <p>{data.commentDescription} </p>
      <img className="i-comma" alt="comma" src={InvertedComma} />

      <h1>{data.name}</h1>
      <div>
        <ReactStars
          edit={false}
          value={parseFloat(data.ratings)}
          size={24}
          activeColor="var(--warning)"
          isHalf={true}
        />
      </div>
    </div>
  );
};

export default FeedBackCard;
