import {
    LOADING_OFF
} from '../types'

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export function LoadTurnOff() {
    return async (dispatch) => {
        dispatch( {
            type: LOADING_OFF,
        });
    }
}