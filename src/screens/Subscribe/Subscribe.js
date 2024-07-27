import React from "react";
import "./Subscribe.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import { LOGIN, PAYMENT_RESPONSE } from "../../constants/PathConstants";
import { useNavigate } from "react-router-dom";
import { setSubscribe } from "../../store/actions/SubscribeActions";
import { initiatePayment } from "../../services/paymentService";
import { setCourse } from "../../store/actions/CourseActions";
import { setOrder, setOrderId } from "../../store/actions/PaymentActions";

const Subscribe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.auth);

  const subscribeData = [
    {
      title: "Level 1 Course",
      subTitle: "Basic trading concepts for beginners.",
    },
    {
      title: "Level 2 Course",
      subTitle: "Advanced trading strategies and techniques.",
    },
    {
      title: "Combined Course",
      subTitle: "Get access to both Level 1 and Level 2 courses.",
    },
  ];

  const makePayment = async () => {
    const orderId = Math.floor(Math.random() * 90000) + 10000;

    const body = {
      orderId: orderId.toString(),
      customerId: "7890",
      amount: 1.0,
      paymentPageClientId: "1234",
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
    dispatch(setSubscribe(item));
    dispatch(setCourse(null));
  };

  const courseCard = (data) => {
    return data.map((item, i) => (
      <div className="subscribe-section" key={i}>
        <h2>{item.title}</h2>
        <p>{item.subTitle}</p>
        <button
          className="subscribe-button"
          onClick={(e) => {
            e.preventDefault();
            onClickCard(item);
          }}
        >
          Enroll Now
        </button>
      </div>
    ));
  };
  return (
    <div className="subscribe-container">
      <div className="subscribe-banner">
        <h1>Subscribe</h1>
      </div>
      <div className="subscribe-content">{courseCard(subscribeData)}</div>
    </div>
  );
};

export default Subscribe;
