import authAxios, { GET_BLOGS } from "./constant";

export const getBlogs = async () => {
    try {
      const response = await authAxios.get(GET_BLOGS);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(`Something went wrong!`);
    }
  };


  export const getBlogDetail = async (id) => {
    try {
      const response = await authAxios.get(GET_BLOGS+`/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(`Something went wrong!`);
    }
  };