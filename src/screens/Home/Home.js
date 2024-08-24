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
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import AboutUsHome from "../AboutUsHome/AboutUsHome";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [terms, setTerms] = useState("");
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    setCourses([
      {
        id: 3,
        title: "Beginner's",
        duration: "Live Classes | 1 week",
        price: "1999",
        img: Img1,
      },
      {
        id: 3,
        title: "Advance",
        duration: "Live Classes | 1 week",
        price: "1999",
        img: Img2,
      },
      {
        id: 3,
        title: "Professional",
        duration: "Live Classes | 1 week",
        price: "5999",
        img: Img3,
      },
      {
        id: 3,
        title: "Live",
        duration: "Live Classes | 1 week",
        price: "1999",
        img: Img4,
      },
      {
        id: 3,
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
          <CustomCarousel data={courses} type={"course"} />
        </div>
      </div>

      <WhyChooseUs />

      <FeedBack/>
      <Footer getTerms={getTerms} />

      <CustomModal isOpen={isModal} data={terms} closeModal={closeModal} />
    </div>
  );
};

export default Home;
