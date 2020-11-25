import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,

    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    
    AUTH_SUCCESS,
    AUTH_ERROR
} from '../types'

import axios from '../tools/axios';

import setTokenAuthInAxiosClient from '../tools/authControl';

import { turnErrorToJSON } from '../tools/turnError';


export function login(user, trycatch, success) {
    return async (dispatch) => {
        try {
            const result = await axios.post(`/auth/login`, user);
            const userAuth = result.data.user;
            const token = result.data.token;

            if (token) {
                localStorage.setItem('token', token);
                setTokenAuthInAxiosClient(token);

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {
                        userAuth,
                        token
                    }
                });

                success();
            }

        } catch (error) {
            let errors = error.response.data.errors;
            let jsonErrors = turnErrorToJSON(errors);

            trycatch({ fields: jsonErrors });
            dispatch({
                type: LOGIN_ERROR,
                payload: jsonErrors
            });
        }
    }
}

export function signUp(user, trycatch, success) {
    return async (dispatch) => {
        try {
            const result = await axios.post(`/auth/signup`, user);
            const token = result.data.token;
            const userAuth = result.data.user;

            if (token) {
                localStorage.setItem('token', token);
                setTokenAuthInAxiosClient(token);

                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: {
                        userAuth,
                        token
                    }
                });

                success();
            }
        } catch (error) {
            let errors = error.response.data.errors;
            let jsonErrors = turnErrorToJSON(errors);

            trycatch({ fields: jsonErrors });
            dispatch({
                type: SIGNUP_ERROR,
                payload: jsonErrors
            });
        }

    }
}

export function getAuthenticatedUser() {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
        if (token) {
            setTokenAuthInAxiosClient(token);
        
            try {
                const result = await axios.get('/auth');
                const userAuth = result.data.user;
    
                dispatch({
                    type: AUTH_SUCCESS,
                    payload: {
                        userAuth,
                        token
                    }
                });
    
            } catch (error) {
                dispatch({
                   type: AUTH_ERROR
                });
            }
        } else 
            dispatch({
                type: AUTH_ERROR
            });
    }
}


