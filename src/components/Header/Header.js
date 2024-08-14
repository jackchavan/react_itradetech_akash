import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/actions/AuthActions";
import {
  ABOUT,
  COURSE_AND_SUBSCRIBE,
  HOME,
  LOGIN,
} from "../../constants/PathConstants";
import { setCourse } from "../../store/actions/CourseActions";
import { setOrder, setOrderId } from "../../store/actions/PaymentActions";
import ContactHeader from "../ContactHeader/ContactHeader";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth, zIndex } = useSelector((state) => ({
    auth: state?.auth.auth,
    zIndex: state.common.zIndex,
  }));
  const [isLoggedIn, setIsLoggedIn] = useState(auth?.login);
  const [path, setPath] = useState("/");

  useEffect(() => {
    setIsLoggedIn(auth?.login);
  }, [auth]);

  const clearCache = () => {
    localStorage.clear();
    dispatch(setAuth(null));
    dispatch(setCourse(null));
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
    <div className={zIndex ? "mainHeader" : "mainHeader zIndex"}>
      <ContactHeader />
      <div className="header">
        <div className="headerTitle">
          <img className="img-fluid" alt="" src={Logo} />
        </div>
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
                onClick={() => activeLink(COURSE_AND_SUBSCRIBE)}
                className={path === COURSE_AND_SUBSCRIBE ? "active-link" : ""}
                to={COURSE_AND_SUBSCRIBE}
              >
                Courses
              </Link>
            </li>
            {!isLoggedIn && (
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    activeLink(LOGIN);
                    navTo();
                  }}
                  className={path === LOGIN ? "active-link" : ""}
                >
                  Login / Register
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to={HOME} onClick={() => clearCache()}>
                  Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
