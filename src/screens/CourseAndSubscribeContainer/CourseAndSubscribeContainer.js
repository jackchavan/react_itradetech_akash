import React, { useEffect, useState } from "react";
import "./CourseAndSubscribeContainer.css";
import CourseCard from "../../components/CourseCard/CourseCard";
import Img1 from "../../assets/img/test.jpg";
import Img2 from "../../assets/img/course1.jpg";
import Img3 from "../../assets/img/course2.jpg";
import Img4 from "../../assets/img/course3.jpg";
import { getAllCourses } from "../../services/courseService";
import { useDispatch } from "react-redux";
import { setLoading } from "../../store/actions/CommonActions";

const CourseAndSubscribeContainer = () => {
  const courseData = [
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
  ];
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    dispatch(setLoading(true));

    try {
      const response = await getAllCourses();
      if (response) {
        setCourses(response)
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));

      console.error(error);
      return false;
    }
  };
  const onSearch = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm) {
      const filterData = courseData.filter((item) =>
        item.title.toLocaleLowerCase().includes(searchTerm)
      );

      if (filterData.length > 0) {
        setCourses(filterData);
      } else {
        setCourses([]);
      }
    } else {
      setCourses(courseData);
    }
  };

  return (
    <div className="div-container">
      <div className="search-container">
        <input placeholder="Search" onChange={onSearch} />
      </div>

      <div className="courses">
        <div className="grid-container">
          {courses.map((item, index) => (
            <CourseCard data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseAndSubscribeContainer;
