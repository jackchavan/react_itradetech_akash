/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import {
  privacyPolicy,
  refundPolicy,
  termsAndCondition,
} from "../../constants/Policies";
import Logo from "../../assets/img/footer-logo.png";
import X from "../../assets/img/x.svg";
import F from "../../assets/img/facebook.svg";
import I from "../../assets/img/insta.svg";
import L from "../../assets/img/linkedIn.svg";
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

  const links = {
    fb: "https://www.facebook.com/profile.php?id=61560966338042&mibextid=ZbWKwL",
    lin: "https://www.linkedin.com/company/itt-itradetech/",
    x: "https://x.com/itt_itradetech?t=yAKKNiz3UMBbfT12-5-X7Q&s=09",
    insta: "https://www.instagram.com/itt_itradetech?igsh=MWxpcXB2MzNkcTVncg==",
  };

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
        <div className="row flx-wrp img-pad">
          <div className="">
            <div className="footerTitle">
              <img alt="logo" src={Logo} />
            </div>
          </div>
          <div className="info">
            <div className="border-logo"></div>
          </div>
        </div>

        <div className="row" style={{ gap: "50px" }}>
          <p className="footer-info m-0 i-desc" style={{ alignSelf: "auto" }}>
            At I TRADE TECH ACADEMY, we empower aspiring traders and seasoned
            professionals alike with the knowledge, tools, and confidence to
            succeed in the financial markets. Whether you're looking to start
            your trading journey or refine your strategies, our Academy offers
            comprehensive training programs tailored to your needs.
            <div className="col-md-4">
              <h3 className="text-white mb-4">Quick Links</h3>
              {listItem(footerData)}
            </div>
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
            <div className="d-flex justify-content-center mt-4 x-div">
              <h3 className="mr-0 mr-4">Follow us</h3>

              <a className="text-white mr-4" href={links.fb}>
                <img className="x" src={F} alt="x" />
              </a>
              <a className="text-white mr-4" href={links.insta}>
                <img className="x" src={I} alt="x" />
              </a>
              <a className="text-white mr-4" href={links.x}>
                <img className="x" src={X} alt="x" />
              </a>
              <a className="text-white" href={links.lin}>
                <img className="x" src={L} alt="x" />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-4 mb-2">
            <div className="col-md-4">
              <h3 className="text-white mb-4">Quick Links</h3>
              {listItem(footerData)}
            </div>
          </div>
        </div> */}
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
