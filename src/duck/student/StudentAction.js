import {
    FETCH_STUDENT_LIST,
    STUDENT_LIST_RECEIVED
} from './StudentTypes';

export const fetchStudentList = () => {
    return {
        type: FETCH_STUDENT_LIST
    }
}
