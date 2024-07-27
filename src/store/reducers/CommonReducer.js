import { SET_LOADING } from "../../constants/ActionsTypes";

// reducer.js
const initialState = {
  loading: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
