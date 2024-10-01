import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CustomCarousel from "../../components/Carousel/Carousel";
import { getTestimonials } from "../../services/userService";
import { setLoading, setZindex } from "../../store/actions/CommonActions";

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
      <h4>Learner's</h4>
      <h2>FEEDBACK</h2>
      <div className="carousel-container-div">
        <CustomCarousel data={feedback} type={"feedback"} />
      </div>
    </div>
  );
};

export default FeedBack;
