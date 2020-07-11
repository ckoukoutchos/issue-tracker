import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({
  repos: reposReducer,
  session: sessionReducer
});