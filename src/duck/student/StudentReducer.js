import {
    FETCH_STUDENT_LIST,
    STUDENT_LIST_RECEIVED,
    STUDENT_SCREEN_CHANGED
} from './StudentTypes';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case STUDENT_LIST_RECEIVED:
            return action.payload
        default:
            return state;
    }
}