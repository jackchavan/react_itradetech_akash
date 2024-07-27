/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import {
  privacyPolicy,
  refundPolicy,
  termsAndCondition,
} from "../../constants/Policies";
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
    {
      title: "",
      menuList: [
        { label: "", link: "" },
        { label: "", link: "" },
      ],
    },
    {
      title: "",
      menuList: [
        { label: "", link: "" },
        { label: "", link: "" },
      ],
    },
    {
      title: "",
      menuList: [
        { label: "", link: "" },
        { label: "", link: "" },
      ],
    },
  ];

  const listItem = (data) => {
    return data.map((item, i) => (
      <div className="column" key={i}>
        <p className="heading">{item.title}</p>
        {item.menuList.map((m, index) => (
          <a
            href={m.link}
            className="footerLink"
            key={index}
            onClick={(e) => {
              e.preventDefault();
              getTerms(m.data);
            }}
          >
            {m.label}
          </a>
        ))}
      </div>
    ));
  };

  return (
    <div className="box">
      <div className="footerContainer">
        <div className="row">{listItem(footerData)}</div>
      </div>
    </div>
  );
};
export default Footer;
