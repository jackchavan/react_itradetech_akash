import { SET_COURSE, SET_COURSES } from "../../constants/ActionsTypes";

// reducer.js
const initialState = {
  courses: [],
  course: null,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };

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
