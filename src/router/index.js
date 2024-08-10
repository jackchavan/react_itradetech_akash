import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ABOUT,
  COURSE_DETAIL,
  COURSES,
  HOME,
  LOGIN,
  PAYMENT_RESPONSE,
  REGISTER,
  SUBSCRIBE,
} from "../constants/PathConstants";
import Home from "../screens/Home/Home";
import Courses from "../screens/Courses/Courses";
import Login from "../screens/Login/Login";
import Subscribe from "../screens/Subscribe/Subscribe";
import About from "../screens/About/About";
import Header from "../components/Header/Header";
import PaymentStatus from "../screens/Payment-Status/PaymentStatus";
import { useSelector } from "react-redux";
import PageNotFound from "../screens/PageNotFound/PageNotFound";
import Detail from "../screens/Detail/Detail";

const Routing = () => {
  const { auth } = useSelector((state) => state.auth);
  return (
    <div>
      {auth?.login ? (
        <React.Fragment>
          <div className="min-w-[300px] sticky top-0 z-50 bg-white">
            <Header />
          </div>

          <div>
            <div className="px-5 sm:px-10 min-w-[300px] ">
              <Routes>
                <Route exact path={HOME} element={<Home />} />
                <Route path={ABOUT} element={<About />} />
                <Route path={COURSES} element={<Courses />} />
                <Route path={LOGIN} element={<Login />} />
                <Route path={SUBSCRIBE} element={<Subscribe />} />
                <Route path={COURSE_DETAIL + "/:id"} element={<Detail />} />
                <Route path={PAYMENT_RESPONSE} element={<PaymentStatus />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="min-w-[300px] sticky top-0 z-50 bg-white">
            <Header />
          </div>
          <div className=" min-w-[300px] px-5 sm:px-10">
            <Routes>
              <Route exact path={HOME} element={<Home />} />
              <Route path={ABOUT} element={<About />} />
              <Route path={COURSES} element={<Courses />} />
              <Route path={LOGIN} element={<Login />} />
              <Route path={SUBSCRIBE} element={<Subscribe />} />
              <Route path={COURSE_DETAIL} element={<Detail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Routing;
