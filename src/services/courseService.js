import authAxios, { ALL_COURSES, COURSE_DETAIL } from "./constant";

export const getAllCourses = async () => {
  try {
    const response = await authAxios.get(ALL_COURSES);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};

export const getCourseDetail = async (id) => {
  try {
    const response = await authAxios.get(COURSE_DETAIL + id);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Something went wrong!`);
  }
};
