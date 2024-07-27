// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './reducers/AuthReducer';
import courseReducer from './reducers/CourseReducer';
import subscribeReducer from './reducers/SubscribeReducer';
import transactionReducer from './reducers/PaymentReducer';
import commonReducer from './reducers/CommonReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  course:courseReducer,
  subscribe:subscribeReducer,
  transaction:transactionReducer,
  common:commonReducer
});

export default rootReducer;
