import React, { useEffect, useState } from "react";
import "./Login.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { COURSES, HOME, SUBSCRIBE } from "../../constants/PathConstants";
import { setAuth } from "../../store/actions/AuthActions";
import { setLoading } from "../../store/actions/CommonActions";
import { showToast, ToastError, ToastSuccess } from "../../utils/CommonMethods";

const Login = () => {
  const navigate = useNavigate();
  const { course, auth, subscribe } = useSelector((state) => ({
    course: state.course,
    auth: state.auth,
    subscribe: state.subscribe,
  }));
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth?.auth?.login) {
      if (course?.course) {
        navigate(COURSES);
      } else if (subscribe?.subscribe) {
        navigate(SUBSCRIBE);
      } else {
        navigate(HOME);
      }
    }
  }, [auth]);
  const setData = (event) => {
    if (event) {
      const ev = event?.target;
      setUserData({
        ...userData,
        [ev.name]: ev.value,
      });
    }
  };

  const onLogin = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const body = {
      ...userData,
      firstName: "string",
      lastName: "string",
      otp: "string",
      mobileNumber: "string",
      token: "string",
      status: 0,
      created_Date: new Date().toISOString(),
      updated_Date: new Date().toISOString(),
    };
    try {
      const response = await login(body);
      if (response) {
        dispatch(setLoading(false));
        showToast(ToastSuccess, "Login Successful");

        dispatch(setAuth({ login: true, ...response }));
      }
    } catch (error) {
      dispatch(setLoading(false));
      showToast(ToastError, "Invalid Credentials !");
      console.error(error);
      return false;
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={(e) => onLogin(e)}>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={userData.email}
              onChange={(e) => {
                setData(e);
              }}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              required
              onChange={(e) => {
                setData(e);
              }}
            />
          </div>
          <button
            // onClick={(e) => {
            //   e.preventDefault();
            //   onLogin();
            // }}
            type="submit"
          >
            Login
          </button>
        </form>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};

export default Login;
