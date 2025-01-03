import React from "react";
import "./ContactHeader.css";

const ContactHeader = () => {
  return (
    <div className="contact-info">
      <p>
        <i className="fa fa-phone mx-3"></i>
        {"7021001780 / 8850305306"}
      </p>
      {/* <p className="color-change">Website is under the Construction</p> */}
      <p>
        <i className="fa fa-envelope mx-3"></i>
        {"support@itradetech.info"}
      </p>
    </div>
  );
};

export default ContactHeader;
