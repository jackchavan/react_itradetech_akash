import authAxios, { CONTACT_US } from "./constant";

export const conatctUs = async (userData) => {
  const body = {
    ...userData,
  };
  try {
    const response = await authAxios.post(CONTACT_US, body);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};
