import { FETCH_ISSUES, FETCH_ISSUES_SUCCESS, FETCH_ISSUES_FAIL } from '../actionTypes';
import { dateFormatter, timeSinceFormatter } from '../../utils/timeFormatter';

const initialState = {
  error: null,
  loading: false,
  issues: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUES: {
      return {
        ...state,
        loading: true
      };
    }

    case FETCH_ISSUES_SUCCESS: {
      const issues = action.issues.map(issue => ({
        id: issue.id,
        avatar: issue.user.avatar_url,
        title: issue.title,
        created: dateFormatter(issue.created_at),
        updated: timeSinceFormatter(issue.updated_at),
      }));
      return {
        ...state,
        error: null,
        loading: false,
        issues
      };
    }
    case FETCH_ISSUES_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default:
      return state;
  }
}