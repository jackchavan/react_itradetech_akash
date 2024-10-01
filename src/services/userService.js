import authAxios, {
  GENERATE_OTP,
  GET_TESTIMONIALS,
  LOGIN,
  REGISTER,
  VERIFY_OTP,
} from "./constant";

export const register = async (userData) => {
  const body = {
    ...userData,
  };
  try {
    const response = await authAxios.post(REGISTER, body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};

export const login = async (userData) => {
  const body = {
    ...userData,
  };
  try {
    const response = await authAxios.post(LOGIN, body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};

export const sendOTP = async (body) => {
  try {
    const response = await authAxios.post(GENERATE_OTP, body, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};

export const verifyOTP = async (body) => {
  try {
    const response = await authAxios.post(VERIFY_OTP, body, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};

export const getTestimonials = async () => {
  try {
    const response = await authAxios.get(GET_TESTIMONIALS);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};
