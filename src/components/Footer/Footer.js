/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import {
  privacyPolicy,
  refundPolicy,
  termsAndCondition,
} from "../../constants/Policies";
import Logo from "../../assets/img/footer-logo.png";
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
            className="text-white mb-2"
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
    <div className="footer-container">
      <div className="box">
        <div className="row">
          <div className="">
            <div className="footerTitle">
              <img alt="logo" src={Logo} />
            </div>
          </div>
          <div className="info ml-">
            <div className="border-logo"></div>
          </div>
        </div>

        <div className="row">
          <p className="footer-info m-0 i-desc">
            At I TRADE TECH ACADEMY, we empower aspiring traders and seasoned
            professionals alike with the knowledge, tools, and confidence to
            succeed in the financial markets. Whether you're looking to start
            your trading journey or refine your strategies, our Academy offers
            comprehensive training programs tailored to your needs.
          </p>
          <div className="col-md-4 footer-info">
            <h3 className="text-white m-0 mb-4 ">Get In Touch</h3>
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
        </div>
        <div className="row">
          <div className="col-md-4 mb-2">
          <div className="col-md-4">
            <h3 className="text-white mb-4">Quick Links</h3>
            {listItem(footerData)}
          </div>
          </div>
        
         
        </div>
        <div className="footer text-white">
          <div className="row mt-1" style={{ justifyContent: "space-between" }}>
            <div className="col-md-6 text-center text-md-left mb-md-0">
              <p className="m-0">
                Copyright ©{"  "}
                <a className="text-white" href="#">
                  I Trade Tech
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <p className="m-0">
                Designed by{"  "}
                <a className="text-white" href="#">
                  I Trade Tech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
