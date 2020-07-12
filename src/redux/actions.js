import {
  FETCH_REPOS,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAIL,
  SET_API_KEY,
  FETCH_ISSUES,
  FETCH_ISSUES_SUCCESS,
  FETCH_ISSUES_FAIL,
  SET_SELECTED_REPO
} from "./actionTypes";

export const fetchIssues = (apiKey, repo) => ({
  type: FETCH_ISSUES,
  apiKey,
  repo
});

export const fetchIssuesSuccess = (issues) => ({
  type: FETCH_ISSUES_SUCCESS,
  issues
});

export const fetchIssuesFail = (error) => ({
  type: FETCH_ISSUES_FAIL,
  error
});

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

export const setApiKey = (apiKey) => ({
  type: SET_API_KEY,
  apiKey
});

export const setSelectedRepo = (repo) => ({
  type: SET_SELECTED_REPO,
  repo
});
