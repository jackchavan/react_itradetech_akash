/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import {
  privacyPolicy,
  refundPolicy,
  termsAndCondition,
} from "../../constants/Policies";
import Logo from "../../assets/img/logo.svg";
const Footer = ({ getTerms }) => {
  const footerData = [
    {
      title: "Policies",
      menuList: [
        { label: "Privacy Policy", link: "", data: privacyPolicy },
        { label: "Terms and Conditions", link: "", data: termsAndCondition },
        { label: "Refund Policy", link: "", data: refundPolicy },
      ],
    },
  ];

  const listItem = (data) => {
    return data.map((item, i) =>
      item.menuList.map((m, index) => (
        <div className="link-list" key={index}>
          <a
            className="text-white-50 mb-2"
            href={m.link}
            key={index}
            onClick={(e) => {
              e.preventDefault();
              getTerms(m.data);
            }}
          >
            <i className="fa fa-angle-right mr-2"></i>
            {m.label}
          </a>
        </div>
      ))
    );
  };

  return (
    <div className="box">
      <div className="row">
        <div className="info">
          <div className="row footerTitle">
            <img src={Logo} />
            <h1>
              <a>I TRADE TECH</a>
            </h1>
          </div>

          <p>
            Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at
            et diam est, tempor rebum ipsum sit ea tempor stet et consetetur
            dolores. Justo stet diam ipsum lorem vero clita diam
          </p>
        </div>
        <div className="info"></div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-5">
          <h3 className="text-white mb-4">Get In Touch</h3>
          <p>
            <i className="fa fa-map-marker mr-2"></i>A/103, Sheetal standard
            battery employee building, upper govind nagar ,Malad east,Mumbai
            400097
          </p>
          <p>
            <i className="fa fa-phone mr-2"></i>7021001780 / 8850305306
          </p>
          <p>
            <i className="fa fa-envelope mr-2"></i>support@itradetech.info
          </p>
          {/* <div className="d-flex justify-content-start mt-4">
              <a className="text-white mr-4" href="#">
                <i className="fab fa-2x fa-twitter"></i>
              </a>
              <a className="text-white mr-4" href="#">
                <i className="fab fa-2x fa-facebook-f"></i>
              </a>
              <a className="text-white mr-4" href="#">
                <i className="fab fa-2x fa-linkedin-in"></i>
              </a>
              <a className="text-white" href="#">
                <i className="fab fa-2x fa-instagram"></i>
              </a>
            </div> */}
        </div>
        {/* <div className="col-md-4 mb-5">
            <h3 className="text-white mb-4">Our Tech Courses</h3>
            <div className="link-list">
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Web Design
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Apps Design
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Marketing
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Research
              </a>
              <a className="text-white-50" href="#">
                <i className="fa fa-angle-right mr-2"></i>SEO
              </a>
            </div>
          </div> */}
        <div className="col-md-4 mb-5">
          <h3 className="text-white mb-4">Quick Links</h3>
          {listItem(footerData)}
        </div>
      </div>
      <div className="footer">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0">
              Copyright ©{" "}
              <a className="text-white" href="#">
                I Trade Tech{" "}
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <p className="m-0">
              Designed by{" "}
              <a className="text-white" href="#">
                I Trade Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
