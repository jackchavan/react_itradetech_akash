import { SET_COURSE } from "../../constants/ActionsTypes";

// reducer.js
const initialState = {
    course: null,
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_COURSE:
        return {
          ...state,
          course: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default courseReducer;
  