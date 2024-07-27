import { SET_COURSE } from "../../constants/ActionsTypes";

export const setCourse = (payload) => ({
  type: SET_COURSE,
  payload: payload,
});
