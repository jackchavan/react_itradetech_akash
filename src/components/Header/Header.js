import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/actions/AuthActions";
import {
  ABOUT,
  CONTACT_US,
  COURSE,
  HOME,
  LOGIN,
  PATH_BLOGS,
} from "../../constants/PathConstants";
import { setCourse } from "../../store/actions/CourseActions";
import { setOrder, setOrderId } from "../../store/actions/PaymentActions";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/img/logo.png";
import ContactHeader from "../ContactHeader/ContactHeader";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth } = useSelector((state) => ({
    auth: state?.auth.auth,
  }));
  const [isLoggedIn, setIsLoggedIn] = useState(auth?.login);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsToggleOpen(false);
  };

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

  const navTo = () => {
    navigate(LOGIN);
    setIsToggleOpen(false);
  };

  return (
    <header className="sticky-header">
      <ContactHeader />
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow p-0">
        <NavLink className="navbar-brand p-0" to="/">
          <img
            className="d-inline-block align-top"
            width="150"
            height="50"
            alt="logo"
            src={Logo}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleOpen}
          aria-controls="navbarNav"
          aria-expanded={isToggleOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end px-5 ${
            isToggleOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to={HOME}
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={ABOUT}
                onClick={handleLinkClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={COURSE}
                onClick={handleLinkClick}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={CONTACT_US}
                onClick={handleLinkClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={PATH_BLOGS}
                onClick={handleLinkClick}
              >
                Blogs
              </NavLink>
            </li>

            {!isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={LOGIN}
                  onClick={(e) => {
                    e.preventDefault();
                    navTo();
                  }}
                >
                  Login / Register
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={HOME}
                  onClick={() => {
                    clearCache();
                    handleLinkClick();
                  }}
                >
                  Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
