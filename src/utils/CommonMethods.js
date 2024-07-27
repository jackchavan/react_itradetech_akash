import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const emailRegX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const validateEmail = (data) => {
  return emailRegX.test(data);
};

export const ToastSuccess = "success";
export const ToastWarn = "warning";
export const ToastError = "error";

export const showToast = (type, data) => {
  switch (type) {
    case ToastSuccess:
      toast.success(data);
      break;
    case ToastWarn:
      toast.warn(data);
      break;
    case ToastError:
      toast.error(data);
      break;
    default:
  }
};
