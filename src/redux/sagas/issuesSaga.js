import { put, all, takeEvery } from 'redux-saga/effects';
import { FETCH_ISSUES } from '../actionTypes';
import { fetchIssuesSuccess, fetchIssuesFail, setSelectedRepo } from '../actions';
import { issuesUrl } from './apiUrls';

export default function* watchRepo() {
  yield all([
    takeEvery(FETCH_ISSUES, fetchIssuesSaga)
  ])
}

function* fetchIssuesSaga({ apiKey, repo }) {
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
    yield put(setSelectedRepo(repo))
    yield put(fetchIssuesSuccess(issues));
  } catch (error) {
    yield put(fetchIssuesFail(error.message));
  }
}