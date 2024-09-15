import React, { useState } from "react";
import "./ContactUs.css";
import {
  showToast,
  ToastError,
  validateEmail,
  validateNumber,
} from "../../utils/CommonMethods";

const ContactUs = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    city: "",
    comment: "",
  };
  const [details, setDetails] = useState(initialState);

  const onChangeInput = (event) => {
    if (event) {
      const ev = event?.target;

      setDetails({
        ...details,
        [ev.name]: ev.value,
      });
      event.target.setCustomValidity("");
    }
  };

  const onInvalid = (event) => {
    const ev = event?.target;
    if (ev.required && ev?.value?.length === 0) {
      event.target.setCustomValidity(`${ev.placeholder} is required.`);
    }
  };

  const onBlurEmail = (e) => {
    e.preventDefault();
    const isValid = validateEmail(details.email);
    if (details.email.length > 0 && !isValid) {
      showToast(ToastError, "Enter valid email !");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-bg"></div>
      <div className="divider-gray" />

      <div>
        <div className="contact-grid">
          <small>DROP US A LINE</small>
          <h2>SEND YOUR MESSAGE</h2>

          <form onSubmit={onSubmit}>
            <div className="row">
              <input
                name="name"
                placeholder="Your Name"
                required
                value={details.name}
                onInvalid={onInvalid}
                onChange={(e) => onChangeInput(e)}
              />
              <input
                name="phone"
                placeholder="Mobile"
                required
                maxLength="10"
                value={details.phone}
                onInvalid={onInvalid}
                onInput={validateNumber}
                onChange={(e) => onChangeInput(e)}

              />
            </div>
            <div className="row">
              <input
                name="email"
                placeholder="Email"
                required
                value={details.email}
                onInvalid={onInvalid}
                onChange={(e) => onChangeInput(e)}
                onBlur={onBlurEmail}
              />
              <input
                name="city"
                placeholder="City"
                required
                value={details.city}
                onInvalid={onInvalid}
                onChange={(e) => onChangeInput(e)}
              />
            </div>
            <textarea
              name="comment"
              placeholder="Type your message..."
              required
              value={details.comment}
              onInvalid={onInvalid}
              onChange={(e) => onChangeInput(e)}
            />

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
