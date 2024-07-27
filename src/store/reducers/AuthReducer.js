import { SET_IS_AUTHENTICATED } from "../../constants/ActionsTypes";

// reducer.js
const initialState = {
  auth: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
