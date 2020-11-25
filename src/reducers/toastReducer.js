import {
    TOAST_SHOW,
    TOAST_HIDE
} from '../types';

const initialState = {
    messagge: "",
    status: "",
    show: false
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action) {
    switch(action.type) {
        case TOAST_SHOW:
            return {
                ...state,
                messagge: action.payload.messagge,
                status: action.payload.status,
                show: true
            }

        case TOAST_HIDE:
            return {
                ...state,
                show: false
            }

        default:
            return state;
    }
}