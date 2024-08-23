import React, { useState, useEffect } from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import CustomModal from "../../components/Modal/Modal";
import CustomCarousel from "../../components/Carousel/Carousel";
import Img1 from "../../assets/img/test.jpg";
import Img2 from "../../assets/img/course1.jpg";
import Img3 from "../../assets/img/course2.jpg";
import Img4 from "../../assets/img/course3.jpg";
import DividerBlue from "../../assets/img/deviderBlue.png";
import DividerOrange from "../../assets/img/deviderOrange.png";
import HomeBanner from "../../assets/img/home-banner.svg";
import { setZindex } from "../../store/actions/CommonActions";
import { useDispatch } from "react-redux";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import AboutUsHome from "../AboutUsHome/AboutUsHome";

const Home = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [terms, setTerms] = useState("");
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    setCourses([
      {
        title: "Beginner's",
        duration: "Live Classes | 1 week",
        price: "1999",
        img: Img1,
      },
      {
        title: "Advance",
        duration: "Live Classes | 1 week",
        price: "1999",
        img: Img2,
      },
      {
        title: "Professional",
        duration: "Live Classes | 1 week",
        price: "5999",
        img: Img3,
      },
      {
        title: "Live",
        duration: "Live Classes | 1 week",
        price: "1999",
        img: Img4,
      },
      {
        title: "Foundation Module",
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
      <div className="container"></div>

      <AboutUsHome />
      <div className="course-container">
        <h3>Our</h3>
        <h1 className="mb-3">COURSES</h1>

        <div className="carousel-container-div">
          <CustomCarousel data={courses} />
        </div>
      </div>

      <WhyChooseUs />

      <Footer getTerms={getTerms} />

      <CustomModal isOpen={isModal} data={terms} closeModal={closeModal} />
    </div>
  );
};

export default Home;
