import { SET_LOADING } from "../../constants/ActionsTypes";

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload: payload,
});
