import {
    TEXT_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_LOADING
} from './LoginTypes';

INITIAL_STATE = { email: '', password: '', error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEXT_CHANGED:
            return { ...state, [action.payload.prop]: action.payload.value };
        case LOGIN_USER_SUCCESS:
            return { ...state, INITIAL_STATE };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication failed', loading: false, password: '' };
        case LOGIN_USER_LOADING:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
}