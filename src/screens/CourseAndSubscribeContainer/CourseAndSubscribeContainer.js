import React from "react";
import "./CourseAndSubscribeContainer.css";

const CourseAndSubscribeContainer = () => {
  return (
    <div className="div-container">
      <div className="search-container">
        <input placeholder="Search" />
      </div>

      <div className="courses"></div>
    </div>
  );
};

export default CourseAndSubscribeContainer;
