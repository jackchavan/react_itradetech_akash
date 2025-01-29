import {
  SET_BLOGS,
  SET_LOADING,
  SET_ZINDEX,
} from "../../constants/ActionsTypes";

// reducer.js
const initialState = {
  loading: false,
  zIndex: true,
  blogs: [],
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ZINDEX:
      return {
        ...state,
        zIndex: action.payload,
      };
    case SET_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
