import React, { useEffect, useState } from "react";
import "./PaymentStatus.css"; // We'll use a common CSS file for both responses
import { COURSE } from "../../constants/PathConstants";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/actions/CommonActions";
import { getPaymentStatus } from "../../services/paymentService";
import { setOrderId } from "../../store/actions/PaymentActions";
import { useNavigate } from "react-router-dom";

const PaymentStatus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orderId, order } = useSelector((state) => ({
    orderId: state.transaction.orderId,
    order: state.transaction.order,
  }));
  const [status, setStatus] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const getTransactionStatus = async () => {
    try {
      const response = await getPaymentStatus(orderId);
      setPaymentStatus(response);
      if (response.status === "CHARGED") {
        setStatus(true);
      } else if (response.status === "AUTHORIZATION_FAILED") {
        setStatus(false);
      } else if (response.status === "NEW") {
        setStatus("cancel");
      }
      dispatch(setLoading(false));
      dispatch(setOrderId(null));
    } catch (error) {
      dispatch(setLoading(false));
      navigate(-1);
      return false;
    }
  };
  useEffect(() => {
    dispatch(setLoading(true));
    if (orderId !== null) {
      getTransactionStatus();
    } else {
      navigate(-1);
    }
  }, []);

  const navToCourses = () => {
    window.location.href = COURSE;
  };

  return (
    <div className="payment-response-container">
      {status === true ? (
        <div>
          <h1 className="success-message">Payment Successful!</h1>
          <p>
            Thank you for your payment. Your transaction has been completed
            successfully.
          </p>
          <p>order Id : {paymentStatus?.order_id}</p>
          <p>Amont Paid : {order?.sdkPayload?.payload?.amount}</p>
          <p>{paymentStatus?.message}</p>

          <button className="response-button" onClick={() => navToCourses()}>
            Back to Courses
          </button>
        </div>
      ) : status === false ? (
        <div>
          <h1 className="failure-message">Payment Failed !</h1>
          <p>order Id : {paymentStatus?.order_id}</p>
          <p>
            We're sorry, but your transaction could not be completed. Please try
            again.
          </p>
          <button className="response-button" onClick={() => navToCourses()}>
            Back to Courses
          </button>
        </div>
      ) : status === "cancel" ? (
        <div>
          <h1 className="success-message">Transaction cancelled !</h1>
          <p>Your transaction has been cancelled.</p>
          <p>order Id : {paymentStatus?.order_id}</p>

          <button className="response-button" onClick={() => navToCourses()}>
            Back to Courses
          </button>
        </div>
      ) : status === "cancel" ? (
        <div>
          <h1 className="success-message">Transaction cancelled !</h1>
          <p>Your transaction has been cancelled.</p>
          <p>order Id : {paymentStatus?.order_id}</p>

          <button className="response-button" onClick={() => navToCourses()}>
            Back to Courses
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PaymentStatus;
