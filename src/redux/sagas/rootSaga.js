
import { all } from 'redux-saga/effects';
import reposSaga from './repoSaga';

export default function* rootSaga() {
    yield all([
        reposSaga()
    ]);
}