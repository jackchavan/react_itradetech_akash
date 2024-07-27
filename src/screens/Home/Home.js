import React, { useState, useEffect } from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import CustomModal from "../../components/Modal/Modal";
const Home = () => {
  const [courses, setCourses] = useState([]);
  const [terms, setTerms] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    setCourses([
      {
        title: "Foundation Module for Financial Market",
        duration: "Live Classes | 1 week",
        price: "1999",
      },
      {
        title: "Foundation Module for Financial Market",
        duration: "Live Classes | 1 week",
        price: "1999",
      },
      {
        title: "Role of Fundamental Analysis in Market",
        duration: "Live Classes | 1 week",
        price: "5999",
      },
    ]);
  }, []);

  const getTerms = (data) => {
    setTerms(data);
    setModal(true);
  };

  const closeModal = () => {
    setModal(!isModal);
  };
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : courses.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < courses.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="container">
      <div className="home-banner">
        <h1 className="company-name">ITradeTech</h1>
        <h2>Welcome to Our Trading Education Platform</h2>
        <p>
          Learn the art of trading with our comprehensive courses and expert
          guidance.
        </p>
      </div>
      {/* 
      <main>
        <div className="courses-wrapper">
          <button className="nav-button left" onClick={handlePrevClick}>&lt;</button>
          <div className="courses" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
            {courses.map(course => (
              <div className="course" key={course.id}>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
          <button className="nav-button right" onClick={handleNextClick}>&gt;</button>
        </div>
      </main> */}

      <Footer getTerms={getTerms} />
      <CustomModal isOpen={isModal} data={terms} closeModal={closeModal} />
    </div>
  );
};

export default Home;
