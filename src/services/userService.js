import authAxios, {
  FORGET_PASS,
  FORGET_PASS_GENERATE_OTP,
  GENERATE_OTP,
  GET_TESTIMONIALS,
  GET_TEAMMEMBERS,
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


export const getTeammembers = async () => {
  try {
    const response = await authAxios.get(GET_TEAMMEMBERS);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};

export const forgetPassword = async (body) => {
  try {
    const response = await authAxios.post(FORGET_PASS+body.password,body.email, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};

export const generateOtp =  async(body)=>{
  try {
    const response = await authAxios.post(FORGET_PASS_GENERATE_OTP,body, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
}