import {
    ADD_STUDENT,
    ADD_STUDENT_FAILED,
    UPDATE_STUDENT,
    DELETE_STUDENT
} from './AddStudentTypes';

import { STUDENT_LIST_RECEIVED } from '../student/StudentTypes';

import { put /* dispatch action */, call, takeLatest/* watch action changed, but only do latest action */, takeEvery } from 'redux-saga/effects';
import rsf from '../../sagas/firebaseSaga';
import firebase from 'firebase';

import NavigationService from '../../navigation/NavigationService';

function* addStudent(action) {
    try {
        const user = firebase.auth().currentUser;
        yield call(rsf.database.create, `users/${user.uid}/students`, {
            name: action.payload.name,
            phone: action.payload.phone,
            student_email: action.payload.student_email,
            address: action.payload.address
        });
        const studentData = yield call(rsf.database.read, `users/${user.uid}/students`);

        yield put({ type: ADD_STUDENT_FAILED })
        yield put({ type: STUDENT_LIST_RECEIVED, payload: studentData })
        NavigationService.navigate('StudentList');

    } catch (error) {
        yield put({ type: ADD_STUDENT_FAILED })
    }
}

export function* watchAddStudent() {
    yield takeLatest(ADD_STUDENT, addStudent);
}

function* updateStudent(action) {
    try {
        const user = firebase.auth().currentUser;
        yield call(rsf.database.update, `users/${user.uid}/students/${action.payload.uid}`, {
            name: action.payload.name,
            phone: action.payload.phone,
            student_email: action.payload.student_email,
            address: action.payload.address
        });
        const studentData = yield call(rsf.database.read, `users/${user.uid}/students`);

        yield put({ type: ADD_STUDENT_FAILED })
        yield put({ type: STUDENT_LIST_RECEIVED, payload: studentData })
        NavigationService.navigate('StudentList');

    } catch (error) {
        console.log("update student failed");
        yield put({ type: ADD_STUDENT_FAILED })
    }
}

export function* watchUpdateStudent() {
    yield takeLatest(UPDATE_STUDENT, updateStudent);
}

function* deleteStudent(action) {
    console.log("here delete operation....", action.payload.uid);
    try {
        const user = firebase.auth().currentUser;
        yield call(rsf.database.delete, `users/${user.uid}/students/${action.payload.uid}`);

        const studentData = yield call(rsf.database.read, `users/${user.uid}/students`);
        yield put({ type: STUDENT_LIST_RECEIVED, payload: studentData })
    } catch (error) {
        console.log("update student failed");
        yield put({ type: ADD_STUDENT_FAILED })
    }
}

export function* watchDeleteStudent() {
    yield takeLatest(DELETE_STUDENT, deleteStudent);
}