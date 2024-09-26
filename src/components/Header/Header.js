import React, { useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./Header.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../store/actions/AuthActions";
import {
  ABOUT,
  CONTACT_US,
  COURSE,
  HOME,
  LOGIN,
} from "../../constants/PathConstants";
import { setCourse } from "../../store/actions/CourseActions";
import { setOrder, setOrderId } from "../../store/actions/PaymentActions";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../assets/img/logo.png";
import ContactHeader from "../ContactHeader/ContactHeader";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth, zIndex } = useSelector((state) => ({
    auth: state?.auth.auth,
    zIndex: state.common.zIndex,
  }));
  const [isLoggedIn, setIsLoggedIn] = useState(auth?.login);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
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
  };
  return (
    <header className="sticky-header">
      <ContactHeader />
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <NavLink className="navbar-brand" to="/">
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
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to={HOME}
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={COURSE}
                activeClassName="active"
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={ABOUT} activeClassName="active">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={CONTACT_US}
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>

            {!isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
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
                  // activeClassName={isLoggedIn ? "nav-link":"active"}
                  // to={HOME}
                  onClick={() => clearCache()}
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
