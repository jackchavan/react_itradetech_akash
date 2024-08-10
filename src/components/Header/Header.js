import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/actions/AuthActions";
import {
  ABOUT,
  COURSES,
  HOME,
  LOGIN,
  SUBSCRIBE,
} from "../../constants/PathConstants";
import { setCourse } from "../../store/actions/CourseActions";
import { setSubscribe } from "../../store/actions/SubscribeActions";
import { setOrder, setOrderId } from "../../store/actions/PaymentActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth, zIndex } = useSelector((state) => ({
    auth: state?.auth,
    zIndex: state.common.zIndex,
  }));
  const [isLoggedIn, setIsLoggedIn] = useState(auth?.login);
  const [path, setPath] = useState("");

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

  const activeLink = (urlPath) => {
    setPath(urlPath);
  };

  const navTo = () => {
    navigate(LOGIN);
  };
  return (
    <div className={zIndex ? "header" : "header zIndex"}>
      <h1 className="headerTitle">
        <img className="img-fluid" alt="" src="" />I Trade Tech
      </h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link
              onClick={() => activeLink(HOME)}
              className={path === HOME ? "active-link" : ""}
              to={HOME}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => activeLink(ABOUT)}
              className={path === ABOUT ? "active-link" : ""}
              to={ABOUT}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => activeLink(COURSES)}
              className={path === COURSES ? "active-link" : ""}
              to={COURSES}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              onClick={() => activeLink(SUBSCRIBE)}
              className={path === SUBSCRIBE ? "active-link" : ""}
              to={SUBSCRIBE}
            >
              Subscribe
            </Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  activeLink(LOGIN);
                  navTo()
                }}
                className={path === LOGIN ? "active-link" : ""}
              >
                Register/Login
              </Link>
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
    </div>
  );
};

export default Header;
