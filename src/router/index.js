import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ABOUT,
  CONTACT_US,
  COURSE,
  COURSE_DETAIL,
  HOME,
  LOGIN,
  PAYMENT_RESPONSE,
  VIDEO_SESSION,
} from "../constants/PathConstants";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import PaymentStatus from "../screens/Payment-Status/PaymentStatus";
import { useSelector } from "react-redux";
import PageNotFound from "../screens/PageNotFound/PageNotFound";
import Detail from "../screens/Detail/Detail";
import AboutUs from "../screens/AboutUs/AboutUs";
import ContactUs from "../screens/ContactUs/ContactUs";
import Courses from "../screens/Courses/Courses";
import VideoSession from "../screens/VideoSession/VideoSession";

const Routing = () => {
  const { auth } = useSelector((state) => state.auth);
  return (
    <div>
      {auth?.login ? (
        <React.Fragment>
          <Routes>
            <Route exact path={HOME} element={<Home />} />
            <Route path={ABOUT} element={<AboutUs />} />
            <Route path={COURSE} element={<Courses />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={COURSE_DETAIL + "/:id"} element={<Detail />} />
            <Route path={PAYMENT_RESPONSE} element={<PaymentStatus />} />
            <Route path={CONTACT_US} element={<ContactUs />} />
            <Route path={VIDEO_SESSION} element={<VideoSession />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Routes>
            <Route exact path={HOME} element={<Home />} />
            <Route path={ABOUT} element={<AboutUs />} />
            <Route path={COURSE} element={<Courses />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={COURSE_DETAIL + "/:id"} element={<Detail />} />
            <Route path={CONTACT_US} element={<ContactUs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Fragment>
      )}
    </div>
  );
};

export default Routing;
