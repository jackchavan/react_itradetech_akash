import CustomCarousel from "../../components/Carousel/Carousel";
import "./FeedBack.css";
import React, { useEffect, useState } from "react";

const FeedBack = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    setFeedback([
      {
        id: "1",
        comment:
          "The insights and strategies I gained from I Trade Tech Academy have been invaluable. I went from a novice to consistently profitable in just a few months.",
        name: "Mr. XYZ",
        rating: "4.6",
      },
    ]);
  }, []);

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
