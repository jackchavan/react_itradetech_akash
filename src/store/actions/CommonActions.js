import { SET_LOADING, SET_ZINDEX } from "../../constants/ActionsTypes";

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload: payload,
});

export const setZindex = (payload) => ({
  type: SET_ZINDEX,
  payload: payload,
});
