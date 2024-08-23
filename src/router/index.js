import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ABOUT,
  COURSE_AND_SUBSCRIBE,
  COURSE_DETAIL,
  HOME,
  LOGIN,
  PAYMENT_RESPONSE,
} from "../constants/PathConstants";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import About from "../screens/About/About";
import Header from "../components/Header/Header";
import PaymentStatus from "../screens/Payment-Status/PaymentStatus";
import { useSelector } from "react-redux";
import PageNotFound from "../screens/PageNotFound/PageNotFound";
import Detail from "../screens/Detail/Detail";
import CourseAndSubscribeContainer from "../screens/CourseAndSubscribeContainer/CourseAndSubscribeContainer";

const Routing = () => {
  const { auth } = useSelector((state) => state.auth);
  return (
    <div>
      {auth?.login ? (
        <React.Fragment>
          <Header />

          <Routes>
            <Route exact path={HOME} element={<Home />} />
            <Route path={ABOUT} element={<About />} />
            <Route
              path={COURSE_AND_SUBSCRIBE}
              element={<CourseAndSubscribeContainer />}
            />
            <Route path={LOGIN} element={<Login />} />
            <Route path={COURSE_DETAIL} element={<Detail />} />
            <Route path={PAYMENT_RESPONSE} element={<PaymentStatus />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Header />
          <Routes>
            <Route exact path={HOME} element={<Home />} />
            <Route path={ABOUT} element={<About />} />
            <Route
              path={COURSE_AND_SUBSCRIBE}
              element={<CourseAndSubscribeContainer />}
            />
            <Route path={LOGIN} element={<Login />} />
            <Route path={COURSE_DETAIL} element={<Detail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Fragment>
      )}
    </div>
  );
};

export default Routing;
