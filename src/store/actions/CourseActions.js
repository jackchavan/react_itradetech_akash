import { SET_COURSE, SET_COURSES } from "../../constants/ActionsTypes";

export const setCourses = (payload) => ({
  type: SET_COURSES,
  payload: payload,
});

export const setCourse = (payload) => ({
  type: SET_COURSE,
  payload: payload,
});
