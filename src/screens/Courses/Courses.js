import React from "react";
import "./Courses.css"; // Import the CSS file
import Img from "../../assets/img/test.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN, PAYMENT_RESPONSE } from "../../constants/PathConstants";
import { setCourse } from "../../store/actions/CourseActions";
import { initiatePayment } from "../../services/paymentService";
import { setSubscribe } from "../../store/actions/SubscribeActions";
import { setOrder, setOrderId } from "../../store/actions/PaymentActions";
const Courses = () => {
  const { auth } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courseData = [
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
  ];

  const makePayment = async () => {
    const orderId = Math.floor(Math.random() * 90000) + 10000;

    const body = {
      orderId: orderId.toString(),
      customerId: "7890",
      amount: 1.0,
      paymentPageClientId: "7890",
      returnUrl: `http://localhost:3000/${PAYMENT_RESPONSE}`,
      customerEmail: 0,
      customer_phone: 0,
      first_name: 0,
      last_name: 0,
      description: "string",
      myProperty: "string",
      currency: "string",
      udf1: "string",
      udf2: "string",
      udf3: "string",
      udf4: "string",
      udf5: "string",
      udf6: "string",
      udf7: "string",
      udf8: "string",
      udf9: "string",
      udf10: "string",
    };
    try {
      const response = await initiatePayment(body);
      if (response) {
        dispatch(setOrderId(response.orderId));
        dispatch(setOrder(response))
        window.open(response?.paymentLinks?.web, "_self");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const onClickCard = (item) => {
    if (auth?.login) {
      makePayment();
      setData(item);
    } else {
      setData(item);
      navigate(LOGIN);
    }
  };

  const setData = (item) => {
    dispatch(setCourse(item));
    dispatch(setSubscribe(null));
  };

  const courseCard = (data) => {
    return data.map((item, i) => (
      <div className="course-card" key={i}>
        <div className="course-image-container">
          <img src={Img} alt="Course 2" className="course-image" />
        </div>
        <div className="course-details">
          <h2>{item.title}</h2>
          <p>{item.duration}</p>
          <p>₹ {item.price}</p>
          <button className="enroll-button" onClick={() => onClickCard(item)}>
            Enroll Now
          </button>
        </div>
      </div>
    ));
  };
  return (
    <div className="courses-container">
      <div className="courses-banner">
        <h1>Our Courses</h1>
      </div>
      <div className="courses-content">{courseCard(courseData)}</div>
    </div>
  );
};

export default Courses;
