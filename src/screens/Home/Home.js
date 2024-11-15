import React, { useState, useEffect } from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import CustomModal from "../../components/Modal/Modal";
import CustomCarousel from "../../components/Carousel/Carousel";
import { setLoading, setZindex } from "../../store/actions/CommonActions";
import { useDispatch, useSelector } from "react-redux";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import AboutUsHome from "../AboutUsHome/AboutUsHome";
import FeedBack from "../FeedBack/FeedBack";
import { getAllCourses } from "../../services/courseService";
import { setCourses } from "../../store/actions/CourseActions";
import BgHome from "../../assets/img/home-banner.png";
import DividerOrange from "../../assets/img/deviderOrange.png";
const Home = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => ({
    courses: state.course.courses,
  }));
  const [coursesData, setCoursesData] = useState([]);
  const [terms, setTerms] = useState("");
  const [isModal, setModal] = useState(false);

  useEffect(() => {
    getCourses();
  }, []);

  useEffect(() => {
    setCoursesData(courses);
  }, [courses?.length]);

  const getCourses = async () => {
    dispatch(setLoading(true));

    try {
      const response = await getAllCourses();
      if (response) {
        dispatch(setCourses(response));
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));

      console.error(error);
      return false;
    }
  };

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
    <div>
      <div className="ratio ratio-16x9 height-auto" style={{"--bs-aspect-ratio": "42%"}}>
        <img src={BgHome} alt="bg-home" />
      </div>

      <AboutUsHome />

      <div className="course-container">
        <div>
          <h4 className="text-center course">Our</h4>
          <h4 className="text-center course-sub-title">COURSES</h4>
          <div className="carousel-container-div">
            <CustomCarousel data={coursesData} type={"course"} />
          </div>
        </div>
      </div>
      <div className="d-flex devider-o">
        <img src={DividerOrange} alt="bg-home" />
      </div>

      <WhyChooseUs />

      <FeedBack />
      <Footer getTerms={getTerms} />

      <CustomModal isOpen={isModal} data={terms} closeModal={closeModal} />
    </div>
  );
};

export default Home;
