import { SET_ORDER, SET_ORDER_ID } from "../../constants/ActionsTypes";

export const setOrderId = (payload) => ({
  type: SET_ORDER_ID,
  payload: payload,
});

export const setOrder = (payload) => ({
  type: SET_ORDER,
  payload: payload,
});