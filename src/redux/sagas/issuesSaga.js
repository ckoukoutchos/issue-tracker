import { put, all, takeEvery } from 'redux-saga/effects';
import { FETCH_ISSUES, UPDATE_ISSUES_ORDER } from '../actionTypes';
import { fetchIssuesSuccess, fetchIssuesFail, setSelectedRepo, updateIssuesSuccess } from '../actions';
import { issuesUrl } from './apiUrls';

export default function* watchRepo() {
  yield all([
    takeEvery(FETCH_ISSUES, fetchIssuesSaga),
    takeEvery(UPDATE_ISSUES_ORDER, updateIssuesSaga)
  ])
}

function* fetchIssuesSaga({ apiKey, repo }) {
  const savedIssues = checkSessionStorage(repo);

  if (savedIssues) {
    yield put(setSelectedRepo(repo));
    yield put(updateIssuesSuccess(savedIssues));
  } else {
    try {
      const response = yield fetch(issuesUrl(repo.owner, repo.name), {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      });

      if (!response.ok) {
        const error = yield response.json();
        throw new Error(error.message)
      }
      const issues = yield response.json();
      yield put(setSelectedRepo(repo));
      yield put(fetchIssuesSuccess(issues));
    } catch (error) {
      yield put(fetchIssuesFail(error.message));
    }
  }
}

function* updateIssuesSaga({ issues, repoId }) {
  try {
    yield sessionStorage.setItem(String(repoId), JSON.stringify(issues));
    yield put(updateIssuesSuccess(issues));
  } catch (error) {
    yield put(fetchIssuesFail(error.message));
  }
}

const checkSessionStorage = (repo) => {
  const issues = sessionStorage.getItem(String(repo.id));
  return JSON.parse(issues);
}