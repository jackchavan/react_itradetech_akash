import React, { useState } from "react";
import "./Register.css";
import { register, sendOTP, verifyOTP } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../constants/PathConstants";
import {
  showToast,
  ToastSuccess,
  validateEmail,
  validatePassword,
} from "../../utils/CommonMethods";
import { setLoading } from "../../store/actions/CommonActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPass, setIsValidPass] = useState(null);
  const [isVerifyOtp, setIsVerifyOtp] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    otp: "",
    mobileNumber: "",
  });

  const setData = (event) => {
    if (event) {
      const ev = event?.target;
      setUserData({
        ...userData,
        [ev.name]: ev.value,
      });
    }
  };
  const registerUser = async () => {
    dispatch(setLoading(true));

    const body = {
      ...userData,
      token: "string",
      status: 0,
      created_Date: new Date().toISOString(),
      updated_Date: new Date().toISOString(),
    };
    try {
      const response = await register(body);
      if (response === "User registered Succefully") {
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
      verifyOtp();
    }
  };

  const verifyOtp = async () => {
    if (isValidPass) {
      dispatch(setLoading(true));

      const body = {
        mobileNumber: "",
        email: userData.email,
        otp: userData.otp,
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
    }
  };
  const generateOTP = async () => {
    try {
      const response = await sendOTP(userData.email);
      if (response) {
        setUserData({
          ...userData,
          otp: response.toString(),
        });
        setIsVerifyOtp(true);
        showToast(ToastSuccess, "OTP sent successfully to your email.");
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  return (
    <div className="container-register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={(e) => setData(e)}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={(e) => setData(e)}
            required
          />
        </div>
        <div>
          <label>Mobile Number</label>
          <input
            type="number"
            name="mobileNumber"
            value={userData.mobileNumber}
            onChange={(e) => setData(e)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={(e) => setData(e)}
            required
            onBlur={(e) => {
              e.preventDefault();
              const isValid = validateEmail(userData.email);
              setIsValidEmail(isValid);
              // setIsVisibleOtp(isValid);
            }}
          />
        </div>

        {isVerifyOtp && (
          <div>
            <div>
              <label>OTP</label>
              <input
                type="number"
                name="otp"
                value={userData.otp}
                onChange={(e) => setData(e)}
                required={isValidEmail}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={(e) => setData(e)}
                required={isValidEmail}
                onBlur={(e) => {
                  e.preventDefault();
                  if (userData.password.length > 0) {
                    const isValid = validatePassword(userData.password);
                    setIsValidPass(isValid);
                  }
                }}
              />
              {isValidPass === false && (
                <div
                  style={{ color: "red", marginTop: "10px", fontSize: "10px" }}
                >
                  <div>
                    <span>Enter valid password</span>
                  </div>
                  <span>
                    Password must be at least 8 characters long and include at
                    least one lowercase letter, one uppercase letter, one
                    number, and one special character (!@#$%^&*).
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
        {!isVerifyOtp && (
          <button type="submit" disabled={!isValidEmail}>
            Generate OTP
          </button>
        )}
        {isVerifyOtp && <button type="submit">Register</button>}
      </form>
    </div>
  );
};

export default Register;
