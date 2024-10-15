import React, { useEffect, useState } from "react";
import "./Courses.css";
import CourseCard from "../../components/CourseCard/CourseCard";
import { getAllCourses } from "../../services/courseService";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/actions/CommonActions";
import { setCourses } from "../../store/actions/CourseActions";

const Courses = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => ({
    courses: state.course.courses,
  }));
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    if (courses.length === 0) {
      getCourses();
    }
  }, []);

  useEffect(() => {
    setCoursesData(courses);
  }, [courses.length]);

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
  const onSearch = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm) {
      const filterData = courses.filter((item) =>
        item.title.toLocaleLowerCase().includes(searchTerm)
      );

      if (filterData.length > 0) {
        setCoursesData(filterData);
      } else {
        setCoursesData([]);
      }
    } else {
      setCoursesData(courses);
    }
  };

  return (
    <div className="container-fluid text-center p-4 contianer-h">
      <div className="search mb-4">
        <input placeholder="Search" onChange={onSearch} />
      </div>

      <div className="courses">
        <div className="grid-container">
          {coursesData.map((item, index) => (
            <CourseCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
