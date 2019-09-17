import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const sessionErrorsReducer = (state=[], action) => {
    switch(action.type){
        case(RECEIVE_SESSION_ERRORS):
        console.log(action.err)
            return [...action.err.responseJSON];
        case(RECEIVE_CURRENT_USER):
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;