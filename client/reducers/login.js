import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions/login'

function login(state = {}, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                isLoading: true,
                error: false,
                token: null,
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                error: false,
                token: action.token
            });
        case LOGIN_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error,
                token: null
            });
        default:
            return state
    }
}

export default login
