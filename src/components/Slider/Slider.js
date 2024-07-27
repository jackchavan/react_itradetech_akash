import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "../../assets/img/test.jpg";
import { useNavigate } from "react-router-dom";
import { COURSES } from "../../constants/PathConstants";
import "./Slider.css";
const Slider = ({ data }) => {
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };
  const courseCard = (data) => {
    return data?.map((item, i) => (
      <div className="course-card" key={i}>
        <div className="course-image-container">
          <img src={Img} alt="Course 2" className="course-image" />
        </div>
        <div className="course-details">
          <h2>{item.title}</h2>
          <p>{item.duration}</p>
          <p>₹ {item.price}</p>
          <button className="enroll-button" onClick={() => navigate(COURSES)}>
            Enroll Now
          </button>
        </div>
      </div>
    ));
  };
  return (
    <Carousel>
      {courseCard(data)}
    </Carousel>
  );
};

export default Slider;
