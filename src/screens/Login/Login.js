import React, { useEffect, useState } from "react";
import "./Login.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  register,
  sendOTP,
  verifyOTP,
} from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { HOME, LOGIN,COURSE_AND_SUBSCRIBE } from "../../constants/PathConstants";
import { setAuth } from "../../store/actions/AuthActions";
import { setLoading } from "../../store/actions/CommonActions";
import {
  showToast,
  ToastError,
  ToastSuccess,
  validateEmail,
  validateNumber,
  validatePassword,
} from "../../utils/CommonMethods";

const Login = () => {
  const navigate = useNavigate();
  const { course, auth, subscribe } = useSelector((state) => ({
    course: state.course,
    auth: state.auth,
    subscribe: state.subscribe,
  }));
  const dispatch = useDispatch();
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPass, setIsValidPass] = useState(null);

  const [isVerifyOtp, setIsVerifyOtp] = useState(false);
  const initialRegisterState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    otp: "",
    mobileNumber: "",
  };
  const initialLoginState = {
    email: "",
    password: "",
  };
  const [userRegister, setUserRegister] = useState(initialRegisterState);
  const [userLogin, setUserLogin] = useState(initialLoginState);
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (auth?.auth?.login) {
      if (course?.course) {
        navigate(COURSE_AND_SUBSCRIBE);
      } else if (subscribe?.subscribe) {
        navigate(COURSE_AND_SUBSCRIBE);
      } else {
        navigate(HOME);
      }
    }
  }, [auth]);

  const setLogin = (event) => {
    if (event) {
      const ev = event?.target;
      setUserLogin({
        ...userLogin,
        [ev.name]: ev.value,
      });
      event.target.setCustomValidity("");
    }
  };

  const onInvalid = (event) => {
    const ev = event?.target;
    if (ev.required && ev?.value?.length === 0) {
      event.target.setCustomValidity(`${ev.placeholder} is required.`);
    }
  };
  const setRegister = (event) => {
    if (event) {
      const ev = event?.target;

      setUserRegister({
        ...userRegister,
        [ev.name]: ev.value,
      });
      event.target.setCustomValidity("");
    }
  };

  const onLogin = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const body = {
      ...userLogin,
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

  const registerUser = async () => {
    dispatch(setLoading(true));

    const body = {
      ...userRegister,
      token: "string",
      status: 0,
      created_Date: new Date().toISOString(),
      updated_Date: new Date().toISOString(),
    };
    try {
      const response = await register(body);
      if (response === "User register Succefully") {
        dispatch(setLoading(false));

        navigate(LOGIN);
      }
    } catch (error) {
      dispatch(setLoading(false));

      console.error(error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerifyOtp) {
      generateOTP();
    } else {
      if (!isValidPass && passwordValidation()) {
        verifyOtp();
      }
    }
  };

  const passwordValidation = () => {
    if (confirmPassword !== userRegister.password) {
      showToast(ToastError, "Password does not match !");
      return false;
    } else {
      return true;
    }
  };

  const verifyOtp = async () => {
    dispatch(setLoading(true));

    const body = {
      mobileNumber: "",
      email: userRegister.email,
      otp: userRegister.otp,
    };
    try {
      const response = await verifyOTP(body);
      if (response === "OTP verified successfully.") {
        dispatch(setLoading(false));

        registerUser();
      }
    } catch (error) {
      dispatch(setLoading(false));

      console.error(error);
      return false;
    }
  };

  const generateOTP = async () => {
    dispatch(setLoading(true));

    try {
      const response = await sendOTP(userRegister.email);
      if (response) {
        setIsVerifyOtp(true);
        dispatch(setLoading(false));

        showToast(ToastSuccess, "OTP sent successfully to your email.");
      }
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));

      return false;
    }
  };

  const resetState = () => {
    setUserLogin(initialLoginState);
    setUserRegister(initialRegisterState);
  };

  const onBlurPassword = (e) => {
    e.preventDefault();
    if (userRegister.password.length > 0) {
      const isValid = validatePassword(userRegister.password);
      setIsValidPass(isValid);
      if (!isValid) {
        showToast(
          ToastError,
          `Enter a valid password: At least 8 characters with one lowercase, one uppercase, one number, and one special character (!@#$%^&*).`
        );
      }
    }
  };

  const onBlurEmail = (e) => {
    e.preventDefault();
    const isValid = validateEmail(userRegister.email);
    setIsValidEmail(isValid);
    if (userRegister.email.length > 0 && !isValid) {
      showToast(ToastError, "Enter valid email !");
    }
  };
  return (
    <div className="login-div">

   
    <div className="login-container">
      <div className="login-box">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="chk"
              aria-hidden="true"
              onClick={() => resetState()}
            >
              Register
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onInvalid={onInvalid}
              value={userRegister.firstName}
              onChange={(e) => setRegister(e)}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onInvalid={onInvalid}
              value={userRegister.lastName}
              onChange={(e) => setRegister(e)}
              required
            />
            <input
              name="mobileNumber"
              placeholder="Mobile"
              type="text"
              onInvalid={onInvalid}
              maxLength="10"
              onInput={validateNumber}
              value={userRegister.mobileNumber}
              onChange={(e) => setRegister(e)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onInvalid={onInvalid}
              value={userRegister.email}
              onChange={(e) => setRegister(e)}
              required
              onBlur={onBlurEmail}
            />
            {isVerifyOtp && (
              <>
                <input
                  name="otp"
                  placeholder="OTP"
                  type="text"
                  onInvalid={onInvalid}
                  maxLength="6"
                  onInput={validateNumber}
                  value={userRegister.otp}
                  onChange={(e) => setRegister(e)}
                  required={isValidEmail}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onInvalid={onInvalid}
                  value={userRegister.password}
                  onChange={(e) => setRegister(e)}
                  required={isValidEmail}
                  onBlur={onBlurPassword}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Password"
                  onInvalid={onInvalid}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required={isValidEmail}
                />
              </>
            )}
            <button type="submit">
              {isVerifyOtp ? "Register" : "Generate OTP"}
            </button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={onLogin}>
            <label
              htmlFor="chk"
              aria-hidden="true"
              onClick={() => resetState()}
            >
              Login
            </label>
            <input
              className="email-input"
              type="email"
              name="email"
              placeholder="Email"
              onInvalid={onInvalid}
              required
              value={userLogin.email}
              onChange={(e) => {
                setLogin(e);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onInvalid={onInvalid}
              value={userLogin.password}
              required
              onChange={(e) => {
                setLogin(e);
              }}
            />
            <button type="submit">LOGIN</button>
            <label className="forgot-pass">
              <a>Forgot password ?</a>
            </label>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
