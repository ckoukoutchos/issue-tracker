import { FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAIL } from "./actionTypes";

export const fetchRepos = (apiKey) => ({
  type: FETCH_REPOS,
  apiKey
});

export const fetchReposSuccess = (repos) => ({
  type: FETCH_REPOS_SUCCESS,
  repos
});

export const fetchReposFail = (error) => ({
  type: FETCH_REPOS_FAIL,
  error
});
