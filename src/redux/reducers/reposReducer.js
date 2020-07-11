import { FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAIL } from '../actionTypes';

const initialState = {
  error: null,
  loading: false,
  repos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS: {
      return {
        ...state,
        loading: true
      };
    }

    case FETCH_REPOS_SUCCESS: {
      const repos = action.repos.map(repo => ({
        owner: repo.owner.login,
        repo: repo.name
      }));

      return {
        ...state,
        error: null,
        loading: false,
        repos
      };
    }
    case FETCH_REPOS_FAIL: {
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