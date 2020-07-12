import { all } from 'redux-saga/effects';
import reposSaga from './repoSaga';
import issuesSaga from './issuesSaga';

export default function* rootSaga() {
  yield all([
    reposSaga(),
    issuesSaga()
  ]);
}