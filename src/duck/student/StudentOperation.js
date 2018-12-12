import {
    FETCH_STUDENT_LIST,
    STUDENT_LIST_RECEIVED
} from './StudentTypes';

import { put /* dispatch action */, call, takeLatest/* watch action changed, but only do latest action */, takeEvery } from 'redux-saga/effects';
import rsf from '../../sagas/firebaseSaga';
import firebase from 'firebase';

function* fetch_studentList() {
    //console.log("fetch student....");
    const user = firebase.auth().currentUser;
    const studentData = yield call(rsf.database.read, `users/${user.uid}/students`);
    if (studentData != null) {
        const studentArr = Object.keys(studentData).map(i => studentData[i]);
        try {
            yield put({ type: STUDENT_LIST_RECEIVED, payload: studentData })
        } catch (error) {
            yield put({ STUDENT_LIST_RECEIVED })
        }
    }
    //console.log("current user >> " + JSON.stringify(studentArr));
}

export function* watchFetchStudentList() {
    yield takeLatest(FETCH_STUDENT_LIST, fetch_studentList);
}