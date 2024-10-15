import { useState } from "react";
import {
  showToast,
  ToastError,
  ToastSuccess,
  validateEmail,
  validateNumber,
  validatePassword,
} from "../../utils/CommonMethods";
import { setLoading } from "../../store/actions/CommonActions";
import { useDispatch } from "react-redux";
import {
  forgetPassword,
  generateOtp,
  verifyOTP,
} from "../../services/userService";

const initialState = {
  email: "",
  password: "",
  otp: "",
};
const ForgetPassword = ({ setChecked }) => {
  const [data, setData] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPass, setIsValidPass] = useState(null);
  const [isOtpGenerate, setIsOtpGenerate] = useState(false);

  const dispatch = useDispatch();

  const onInvalid = (event) => {
    const ev = event?.target;
    if (ev.required && ev?.value?.length === 0) {
      event.target.setCustomValidity(`${ev.placeholder} is required.`);
    }
  };

  const passwordValidation = () => {
    if (confirmPassword !== data.password) {
      showToast(ToastError, "Password does not match !");
      return false;
    } else {
      return true;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail && !isOtpGenerate) {
      generateOTP();
    } else {
      if (isValidPass && passwordValidation()) {
        verifyOtp();
      }
    }
  };
  const verifyOtp = async () => {
    dispatch(setLoading(true));

    const body = {
      mobileNumber: "",
      email: data.email,
      otp: data.otp,
    };
    try {
      const response = await verifyOTP(body);
      if (response === "OTP verified successfully.") {
        dispatch(setLoading(false));

        forgetPass();
      }
    } catch (error) {
      dispatch(setLoading(false));

      console.error(error);
      return false;
    }
  };

  const forgetPass = async () => {
    dispatch(setLoading(true));

    const body = {
      email: data.email,
      password: data.password,
    };
    try {
      const response = await forgetPassword(body);
      if (response) {
        dispatch(setLoading(false));
        setData(initialState);
        setChecked(false);
        setConfirmPassword("");
        showToast(ToastSuccess, "Password reset successfully.");
      }
    } catch (error) {
      dispatch(setLoading(false));

      console.error(error);
      return false;
    }
  };
  const setFormData = (event) => {
    if (event) {
      const ev = event?.target;
      setData({
        ...data,
        [ev.name]: ev.value,
      });
      event.target.setCustomValidity("");
    }
  };
  const generateOTP = async () => {
    dispatch(setLoading(true));

    try {
      const response = await generateOtp(data.email);
      if (response) {
        if (response) {
          setIsOtpGenerate(true);
          showToast(ToastSuccess, "OTP sent successfully to your email.");
        }
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.error(error);
      showToast(
        ToastError,
        "Someting went wrong!, Please try again after some time."
      );

      dispatch(setLoading(false));

      return false;
    }
  };

  const resetState = () => {
    setData(initialState);
    setConfirmPassword("");
  };

  const onBlurPassword = (e) => {
    e.preventDefault();
    if (data.password.length > 0) {
      const isValid = validatePassword(data.password);
      setIsValidPass(isValid);
      if (!isValid) {
        showToast(
          ToastError,
          `Enter a valid password: At least 8 characters with one lowercase, one uppercase, one number, and one special character (!@#$%^&*).`
        );
      }
    }
  };

  const onBlurEmail = (e) => {
    e.preventDefault();
    const isValid = validateEmail(data.email);
    setIsValidEmail(isValid);
    if (data.email.length > 0 && !isValid) {
      showToast(ToastError, "Enter valid email !");
    }
  };
  return (
    <div className="forget-pass">
      <form onSubmit={onSubmit} autoComplete="off">
        <label className="display-6">Forget Password</label>
        <input
          style={{ marginTop: "10vh" }}
          className="email-input"
          type="email"
          name="email"
          placeholder="Email"
          onInvalid={onInvalid}
          onBlur={onBlurEmail}
          required={true}
          value={data.email}
          onChange={(e) => {
            setFormData(e);
          }}
        />
        {isOtpGenerate && (
          <div>
            <input
              name="otp"
              placeholder="OTP"
              type="text"
              onInvalid={onInvalid}
              maxLength="6"
              onInput={validateNumber}
              value={data.otp}
              onChange={(e) => setFormData(e)}
              required={isOtpGenerate}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="new-off"
              onInvalid={onInvalid}
              value={data.password}
              onBlur={onBlurPassword}
              required={isOtpGenerate}
              onChange={(e) => {
                setFormData(e);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              autoComplete="new-off"
              onInvalid={onInvalid}
              onBlur={onBlurPassword}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={isOtpGenerate}
            />
          </div>
        )}

        <button type="submit">
          {isOtpGenerate ? "Change Password" : "Generate OTP"}
        </button>
        <label className="forgot-pass" htmlFor="forget-chk" aria-hidden="true" onClick={()=>setChecked(false)}>
          <a>Login ?</a>
        </label>
      </form>
    </div>
  );
};

export default ForgetPassword;
