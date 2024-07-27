import { SET_SUBSCRIBE } from "../../constants/ActionsTypes";

// reducer.js
const initialState = {
  subscribe: null,
  };
  
  const subscribeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SUBSCRIBE:
        return {
          ...state,
          subscribe: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default subscribeReducer;
  