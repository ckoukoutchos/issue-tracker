import { put, all, takeEvery } from 'redux-saga/effects';
import { FETCH_REPOS } from '../actionTypes';
import { fetchReposSuccess, fetchReposFail, setApiKey } from '../actions';
import { reposUrl } from './apiUrls';

export default function* watchRepo() {
  yield all([
    takeEvery(FETCH_REPOS, fetchReposSaga)
  ])
}

function* fetchReposSaga({ apiKey }) {
  try {
    const response = yield fetch(reposUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });

    if (!response.ok) {
      const error = yield response.json();
      throw new Error(error.message)
    }

    const repos = yield response.json();
    yield sessionStorage.setItem('key', apiKey);
    yield put(setApiKey(apiKey));
    yield put(fetchReposSuccess(repos));

  } catch (error) {
    yield put(fetchReposFail(error.message));
  }
}