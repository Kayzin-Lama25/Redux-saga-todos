import { delay } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import { watchLoginUser } from '../duck/login/LoginOperation';
import { watchFetchStudentList } from '../duck/student/StudentOperation';
import { watchAddStudent, watchUpdateStudent, watchDeleteStudent } from '../duck/addStudent/AddStudentOperation';

export default function* rootSaga() {
    console.log("here root saga");
    yield [
        fork(watchLoginUser),
        fork(watchFetchStudentList),
        fork(watchAddStudent),
        fork(watchUpdateStudent),
        fork(watchDeleteStudent)
    ]
}