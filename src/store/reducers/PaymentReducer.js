import { SET_ORDER, SET_ORDER_ID } from "../../constants/ActionsTypes";

// reducer.js
const initialState = {
  orderId: null,
  order: null,
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_ID:
      return {
        ...state,
        orderId: action.payload,
      };

    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
