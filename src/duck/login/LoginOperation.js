import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_LOADING
} from './LoginTypes';

//saga effect
import { put /* dispatch action */, call, takeLatest/* watch action changed, but only do latest action */, takeEvery } from 'redux-saga/effects';
import rsf from '../../sagas/firebaseSaga';

import NavigationService from '../../navigation/NavigationService';

function* loginUser(action) {
    const { email, password, loading, error } = action.payload;

    yield put({ type: LOGIN_USER_LOADING, loading });

    try {
        const data = yield call(rsf.auth.signInWithEmailAndPassword, email, password);
        NavigationService.navigate('StudentList', 0);

    } catch (error) {
        yield put({ type: LOGIN_USER_FAIL, error });
    }
}

export function* watchLoginUser() {
    yield takeLatest(LOGIN_USER, loginUser);
}