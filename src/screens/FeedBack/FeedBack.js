import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CustomCarousel from "../../components/Carousel/Carousel";
import { getTestimonials } from "../../services/userService";
import { setLoading } from "../../store/actions/CommonActions";

import "./FeedBack.css";

const FeedBack = () => {
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    getFeedbacks();
  }, []);

  const getFeedbacks = async () => {
    dispatch(setLoading(true));

    try {
      const response = await getTestimonials();
      if (response) {
        setFeedback(response);
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));

      console.error(error);
      return false;
    }
  };

  return (
    <div className="feedback-container">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>

      <label className="title">Learner's</label>
      <label className="subtitle">FEEDBACK</label>
      <div className="carousel-container-div">
        <CustomCarousel data={feedback} type={"feedback"} />
      </div>
    </div>
  );
};

export default FeedBack;
