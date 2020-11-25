import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    SIGNUP_SUCCESS,
    SIGNUP_ERROR,

    AUTH_SUCCESS,
    AUTH_ERROR,
} from '../types'

const initialState = {
    userAuth: {  },
    authenticated: null,
    token: null,

    errors: { },
}
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_ERROR:
        case SIGNUP_ERROR:
            return {
                ...state,
                authenticated: false,
                errors: action.payload,
            }
        
        case AUTH_ERROR:
            return {
                ...state,
                userAuth: {},
                token: null,
                authenticated: false,
            }

        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
        case AUTH_SUCCESS:
            return {
                ...state,
                userAuth: action.payload.userAuth,
                token: action.payload.token,
                authenticated: true
            }
        // --------------------
        default:
            return state;
    }
}