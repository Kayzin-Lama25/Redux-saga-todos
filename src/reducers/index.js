import { combineReducers } from 'redux';

import LoginReducer from '../duck/login/LoginReducer';
import StudentReducer from '../duck/student/StudentReducer';
import AddStudentReducer from '../duck/addStudent/AddStudentReducer';

export default combineReducers({
    authReducer: LoginReducer,
    studentList: StudentReducer,
    student: AddStudentReducer
});