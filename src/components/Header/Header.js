import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import ContactHeader from "../ContactHeader/ContactHeader";
import Logo from "../../assets/img/logo.png";
import styled from "styled-components";
import Bar from "../../assets/img/bar-icon.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth, zIndex } = useSelector((state) => ({
    auth: state?.auth.auth,
    zIndex: state.common.zIndex,
  }));
  const [isLoggedIn, setIsLoggedIn] = useState(auth?.login);
  const [path, setPath] = useState("/");
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

  const activeLink = (urlPath) => {
    setPath(urlPath);
  };

  const navTo = () => {
    navigate(LOGIN);
  };
  return (
    <div className={zIndex ? "mainHeader" : "mainHeader zIndex"}>
      <ContactHeader />
      <StyledHeader>
        <div className="nav_logo">
          <img className="img-fluid" alt="logo" src={Logo} />
        </div>
        <nav>
          <NavManu className="nav-links" isToggleOpen={isToggleOpen}>
            <li className="nav-menu-list">
              <Link
                onClick={() => activeLink(HOME)}
                className={path === HOME ? "active-link" : ""}
                to={HOME}
              >
                Home
              </Link>
            </li>

            <li className="nav-menu-list">
              <Link
                onClick={() => activeLink(COURSE)}
                className={path === COURSE ? "active-link" : ""}
                to={COURSE}
              >
                Courses
              </Link>
            </li>
            <li className="nav-menu-list">
              <Link
                onClick={() => activeLink(ABOUT)}
                className={path === ABOUT ? "active-link" : ""}
                to={ABOUT}
              >
                About Us
              </Link>
            </li>
            <li className="nav-menu-list">
              <Link
                onClick={() => activeLink(CONTACT_US)}
                className={path === CONTACT_US ? "active-link" : ""}
                to={CONTACT_US}
              >
                Contact Us
              </Link>
            </li>
            {!isLoggedIn && (
              <li className="nav-menu-list">
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
              <li className="nav-menu-list">
                <Link to={HOME} onClick={() => clearCache()}>
                  Logout <i className="fa fa-sign-out" aria-hidden="true"></i>
                </Link>
              </li>
            )}
          </NavManu>
        </nav>
        <img src={Bar} className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 24px;
      color: #fab005;
      font-weight: bold;
    }
  }
  .menuToggleBtn {
    display: none;
    position: absolute;
    right: 20px;
    top: 30px;
    cursor: pointer;
    height: 40px;
    width: 40px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  li {
    &:hover {
      cursor: pointer;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    display: block;
    padding: 10px 10px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    transition: display 1s ease;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;
export default Header;
