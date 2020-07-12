import { combineReducers } from 'redux';
import issuesReducer from './issuesReducer';
import reposReducer from './reposReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({
  issues: issuesReducer,
  repos: reposReducer,
  session: sessionReducer
});