import { SET_IS_AUTHENTICATED } from "../../constants/ActionsTypes";

export const setAuth = (payload) => ({
    type: SET_IS_AUTHENTICATED,
    payload: payload,
  });