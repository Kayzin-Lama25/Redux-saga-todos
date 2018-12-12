import {
    TEXT_CHANGED,
    ADD_STUDENT,
    STUDENT_SCREEN_CHANGED,
    UPDATE_STUDENT,
    DELETE_STUDENT
} from './AddStudentTypes';

export const add_student_text_changed = ({ prop, value }) => {
    return {
        type: TEXT_CHANGED,
        payload: { prop, value }
    }
}

export const add_student_action = (student) => {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}

export const update_student_action = (student) => {
    console.log("here update student action ....");
    return {
        type: UPDATE_STUDENT,
        payload: student
    }
}

export const studentScreenChanged = (student) => {
    return {
        type: STUDENT_SCREEN_CHANGED,
        payload: student
    }
}

export const deleteStudent = (student) => {
    console.log("here delete student ...... ");
    return {
        type: DELETE_STUDENT,
        payload: student
    }
}