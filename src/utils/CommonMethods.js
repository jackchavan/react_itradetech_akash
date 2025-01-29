import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const emailRegX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

export const validateEmail = (data) => {
  return emailRegX.test(data);
};

export const validatePassword = (password) => {
  return passwordRegX.test(password);
};

export const validateNumber = (e) => {
  return (e.target.value = e.target.value.replace(/[^0-9]/g, ""));
};

export const getUniqueId = () => {
  return Math.floor(Math.random() * 90000) + 10000;
};

export const replaceSlash = (data) => {
  if(data === null){
    return "[]"
  }
  const newString = data?.replace(/\\/g, "")?.replace(/\\n/g, "");

  const finalString = newString?.slice(0, -2) + newString?.slice(-1);

  return finalString;
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


export const formatDate=(dateString) =>{
  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const formattedDate = date.toLocaleDateString('en-US', options);
  const [month, day, year] = formattedDate.split(' ');
  return `${month}-${day.replace(',', '')}-${year}`;
}
