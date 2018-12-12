import {
    TEXT_CHANGED,
    ADD_STUDENT_FAILED,
    STUDENT_SCREEN_CHANGED
} from './AddStudentTypes';

const INITIAL_STATE = { name: '', phone: '', student_email: '', address: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEXT_CHANGED:
            return { ...state, [action.payload.prop]: action.payload.value };
        case ADD_STUDENT_FAILED:
            return INITIAL_STATE;
        case STUDENT_SCREEN_CHANGED:
            return action.payload;
        default:
            return state;
    }
}