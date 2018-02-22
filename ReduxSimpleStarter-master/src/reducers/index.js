import { combineReducers } from 'redux';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  comments: (state =[]) => state
});

export default rootReducer;
