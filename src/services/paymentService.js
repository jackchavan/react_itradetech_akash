import authAxios, { INITIATE_PAYMENT, PAYMENT_STATUS } from "./constant";

export const initiatePayment = async (orderData) => {
  const body = {
    ...orderData,
  };
  try {
    const response = await authAxios.post(INITIATE_PAYMENT, body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};

export const getPaymentStatus = async (data) => {
  try {
    debugger;
    const response = await authAxios.post(PAYMENT_STATUS, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};
