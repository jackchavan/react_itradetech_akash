import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseCard from "../CourseCard/CourseCard";
import { SyncLoader } from "react-spinners";
const responsive = {
  superLargeDesktop: {
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
const CustomCarousel = ({ data }) => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    console.log("++++++", data);
    setSliderData(data);
  }, [data]);
  return (
    <div>
      {sliderData.length > 0 ? (
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          // infinite={true}
          // autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .1"
          transitionDuration={500}
          // containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          itemClass="pd-20"
        >
          {sliderData?.map((item, i) => (
            <CourseCard data={item} key={i} />
          ))}
        </Carousel>
      ) : (
        <div className="loader-spinner">
          <SyncLoader color="var(--primary)" margin={20} size={30} />
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;
