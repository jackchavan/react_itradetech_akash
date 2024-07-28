import React, { useState, useEffect } from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import CustomModal from "../../components/Modal/Modal";
import CustomCarousel from "../../components/Carousel/Carousel";
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
    <div>
      <div className="container" style={{ marginBottom: "90px" }}>
        <div className="pt-3rem">
          <h1 className="h1">Learn From Home</h1>
          <h1 className="display-1">Trading and Tech Courses</h1>
          <p>
            Learn the art of trading with our comprehensive courses and expert
            guidance.
          </p>
        </div>
      </div>
      <div className="">

        <CustomCarousel/>
      </div>

      {/* <Footer getTerms={getTerms} /> */}
      <CustomModal isOpen={isModal} data={terms} closeModal={closeModal} />
    </div>
  );
};

export default Home;
