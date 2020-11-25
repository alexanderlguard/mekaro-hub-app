import { combineReducers } from 'redux';
import userReducer from './userReducer';
import systemReducer from './systemReducer';
import toastReducer from './toastReducer';

export default combineReducers({
    users: userReducer,
    systems: systemReducer,
    toasts: toastReducer
});