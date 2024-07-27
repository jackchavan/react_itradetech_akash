import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/actions/AuthActions";
import {
  ABOUT,
  COURSES,
  HOME,
  LOGIN,
  REGISTER,
  SUBSCRIBE,
} from "../../constants/PathConstants";
import { setCourse } from "../../store/actions/CourseActions";
import { setSubscribe } from "../../store/actions/SubscribeActions";
import { setOrder, setOrderId } from "../../store/actions/PaymentActions";

const Header = () => {
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => state?.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(auth?.login);

  useEffect(() => {
    setIsLoggedIn(auth?.login);
  }, [auth]);

  const clearCache = () => {
    localStorage.clear();
    dispatch(setAuth(null));
    dispatch(setCourse(null));
    dispatch(setSubscribe(null));
    dispatch(setOrderId(null));
    dispatch(setOrder(null));
  };
  return (
    <nav className="header">
      <ul className="nav-links">
        <li>
          <Link to={HOME}>Home</Link>
        </li>
        <li>
          <Link to={ABOUT}>About Us</Link>
        </li>
        <li>
          <Link to={COURSES}>Courses</Link>
        </li>
        <li>
          <Link to={SUBSCRIBE}>Subscribe</Link>
        </li>
        {!isLoggedIn && (
          <li className="auth-links">
            <Link to={REGISTER}>Register</Link>
            <Link to={LOGIN}>Login</Link>
          </li>
        )}
      </ul>

      {isLoggedIn && (
        <li className="auth-links">
          <Link to={HOME} onClick={() => clearCache()}>
            Logout
          </Link>
        </li>
      )}
    </nav>
  );
};

export default Header;
