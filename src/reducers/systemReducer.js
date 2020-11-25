import {
    LOADING_OFF
} from '../types'

const initialState = {
    loadingscreen: true
}
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action) {
    switch(action.type) {
        case LOADING_OFF:
            return {
                ...state,
                loadingscreen: false
            }
        // ---------------------
        default:
            return state;
    }
}