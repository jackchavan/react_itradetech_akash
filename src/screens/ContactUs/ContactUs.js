import React, { useState } from "react";
import "./ContactUs.css";
import {
  showToast,
  ToastError,
  ToastSuccess,
  validateEmail,
  validateNumber,
} from "../../utils/CommonMethods";
import { conatctUs } from "../../services/contactUsService";
import { setLoading } from "../../store/actions/CommonActions";
import { useDispatch } from "react-redux";
import BgImg from "../../assets/img/bg-contact-us.png";
const ContactUs = () => {
  const dispatch = useDispatch();
  const initialState = {
    contactname: "",
    email: "",
    mobilenumber: "",
    city: "",
    subject: "",
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

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));

    try {
      const response = await conatctUs(details);
      if (response === "Contact us Succefully") {
        dispatch(setLoading(false));
        setDetails(initialState);
        showToast(ToastSuccess, "Information saved successfully!");
      }
    } catch (error) {
      showToast(ToastError, "Somthing went wrong !");
      dispatch(setLoading(false));
      return false;
    }
  };
  return (
    <div className="justify-content-center align-items-center">
      <div className="">
        <img src={BgImg} alt="bg-contact" className="bg-img-conact" />
      </div>
      <div className="divider-gray align-center" />

      <div>
        <div className="contact-grid">
          <small>DROP US A LINE</small>
          <h2>SEND YOUR MESSAGE</h2>

          <form onSubmit={onSubmit}>
            <div className="d-flex flex-column flex-md-row text-center gap-lg-5">
              <input
                name="contactname"
                placeholder="Your Name"
                required
                value={details.contactname}
                onInvalid={onInvalid}
                onChange={(e) => onChangeInput(e)}
              />
              <input
                name="mobilenumber"
                placeholder="Mobile"
                required
                maxLength="10"
                value={details.mobilenumber}
                onInvalid={onInvalid}
                onInput={validateNumber}
                onChange={(e) => onChangeInput(e)}
              />
            </div>
            <div className="d-flex flex-column flex-md-row text-center gap-lg-5">
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
              name="subject"
              placeholder="Type your message..."
              required
              value={details.subject}
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
