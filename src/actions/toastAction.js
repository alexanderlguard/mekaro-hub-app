import {
    TOAST_SHOW,
    TOAST_HIDE
} from '../types';

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export function ShowMessagge(status, messagge) {
    return async (dispatch) => {
        dispatch( {
            type: TOAST_SHOW,
            payload: {
                status,
                messagge
            }
        });
    }
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export function HideMessagge() {
    return async (dispatch) => {
        dispatch( {
            type: TOAST_HIDE
        });
    }
}