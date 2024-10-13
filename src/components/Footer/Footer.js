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
import BgFooter from "../../assets/img/bg-footer.png";
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
        <div className="links-a mb-1">
          <a
            key={index}
            href={m.link}
            onClick={(e) => {
              e.preventDefault();
              getTerms(m.data);
            }}
          >
            <i className="fa fa-angle-right mr-1"></i>
            {"    "}
            {m.label}
          </a>
        </div>
      ))
    );
  };

  return (
    <div className="footer-div">

      <div className="d-flex justify-content-start logo-container">
        <img alt="logo" src={Logo} className="itt-logo" />
        <div className="divider-logo"></div>
      </div>

      <div className="m-footer">
        <div className="d-flex gap justify-content-center align-content-center">
          <div>
            <p className="footer-info m-0">
              At I TRADE TECH ACADEMY, we empower aspiring traders and seasoned
              professionals alike with the knowledge, tools, and confidence to
              succeed in the financial markets. Whether you're looking to start
              your trading journey or refine your strategies, our Academy offers
              comprehensive training programs tailored to your needs.
            </p>
            <div className="q-links mt-5">
              <h3 className="get-txt">Quick Links</h3>
              {listItem(footerData)}
            </div>
          </div>

          <div className="col-md-4 footer-info">
            <h3 className="get-txt display-6">Get In Touch</h3>
            <p className="m-0">
              <i className="fa fa-map-marker mx-2"></i>A/103, Sheetal standard
              battery employee building, upper govind nagar, Malad east, Mumbai
              400097
            </p>
            <p className="m-0">
              <i className="fa fa-phone mx-2"></i>7021001780 / 8850305306
            </p>
            <p className="m-0">
              <i className="fa fa-envelope mx-2"></i>support@itradetech.info
            </p>
            <div className="follow d-flex justify-content-center mt-4 gap-3">
              <span className="mr-4 diaplay-4">Follow us</span>
              <a className=" mr-4" href={links.fb}>
                <img className="x" src={F} alt="Facebook" />
              </a>
              <a className=" mr-4" href={links.insta}>
                <img className="x" src={I} alt="Instagram" />
              </a>
              <a className=" mr-4" href={links.x}>
                <img className="x" src={X} alt="X" />
              </a>
              <a className="" href={links.lin}>
                <img className="x" src={L} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        <div className="bottom d-flex justify-content-between">
          <p className="m-0">
            Copyright ©{" "}
            <a className="" href="#">
              I Trade Tech
            </a>
            . All Rights Reserved.
          </p>
          <div className="text-center text-md-right">
            <p className="m-0">
              Designed by{" "}
              <a className="" href="#">
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
