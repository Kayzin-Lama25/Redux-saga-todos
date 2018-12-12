import {
    TEXT_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './LoginTypes';

export const changeText = ({ prop, value }) => {
    return {
        type: TEXT_CHANGED,
        payload: { prop, value }
    };
};

export const loginUser = ({ email, password }) => {
    return {
        type: LOGIN_USER,
        payload: { email, password }
    }
}

export const loginUserSuccess = () => {
    return {
        type: LOGIN_USER_SUCCESS
    }
}
