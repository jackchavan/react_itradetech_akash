import axios from "axios";

export const BASE_URL = process.env.REACT_APP_APP_URL;

export const REGISTER = BASE_URL + "/api/User/RegisterUser";
export const LOGIN = BASE_URL + "/api/User/login";
export const GENERATE_OTP = BASE_URL + "/api/OTP/generate";
export const VERIFY_OTP = BASE_URL + "/api/OTP/verify";
export const INITIATE_PAYMENT = BASE_URL + "/api/Payment/initiate";
export const PAYMENT_STATUS = BASE_URL + "/api/Payment/status";
export const ALL_COURSES = BASE_URL + "/api/Course/GetAllCourses";
export const COURSE_DETAIL = BASE_URL + "/api/Course/GetCourse?courseCode=";

const authAxios = axios.create();
authAxios.interceptors.request.use(
  (config) => {
    const token = ""; //getToken()
    if (token) {
      config.headers["x-auth-token"] = token;
      config.headers["Access-Control-Allow-Origin"] = "*";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default authAxios;
