import React, { useState, useEffect } from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import CustomModal from "../../components/Modal/Modal";
import CustomCarousel from "../../components/Carousel/Carousel";
import Img1 from "../../assets/img/test.jpg";
import Img2 from "../../assets/img/course1.jpg";
import Img3 from "../../assets/img/course2.jpg";
import Img4 from "../../assets/img/course3.jpg";
import { setZindex } from "../../store/actions/CommonActions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [terms, setTerms] = useState("");
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    setCourses([
      {
        title: "Foundation Module for Financial Market",
        duration: "Live Classes | 1 week",
        price: "1999",
        img: Img1,
      },
      {
        title: "Foundation Module for Financial Market",
        duration: "Live Classes | 1 week",
        price: "1999",
        img: Img2,
      },
      {
        title: "Role of Fundamental Analysis in Market",
        duration: "Live Classes | 1 week",
        price: "5999",
        img: Img3,
      },
      {
        title: "Foundation Module for Financial Market",
        duration: "Live Classes | 1 week",
        price: "1999",
        img: Img4,
      },
      {
        title: "Foundation Module for Financial Market",
        duration: "Live Classes | 1 week",
        price: "1999",
        img: Img2,
      },
    ]);
  }, []);

  const getTerms = (data) => {
    setTerms(data);
    dispatch(setZindex(false));
    setModal(true);
  };

  const closeModal = () => {
    setModal(!isModal);
    dispatch(setZindex(true));
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <div className="pt-3rem">
          <h1 className="h1">Learn From Home</h1>
          <h1 className="display-1">Trading and Tech Courses</h1>
          <p>
            Learn the art of trading with our comprehensive courses and expert
            guidance.
          </p>
        </div>
      </div>
      <div className="course-container">
        <h1 className="h1 mb-3">Checkout New Releases Of Our Courses</h1>

        <div className="carousel-container-div">
          <CustomCarousel data={courses} />
        </div>
      </div>

      <div className="footer-container">
        <Footer getTerms={getTerms} />
      </div>
      <CustomModal isOpen={isModal} data={terms} closeModal={closeModal} />
    </div>
  );
};

export default Home;
