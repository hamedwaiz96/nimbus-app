import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionErrorsReducer = (state=[], action) => {
    switch(action.type){
        case(RECEIVE_SESSION_ERRORS):
        console.log(action.err)
            if('responseJSON' in action.err){
                return merge([], state, action.err.responseJSON)
            } else {
                console.log(action.err)
                return [...action.err];
            };
        case(RECEIVE_CURRENT_USER):
            return [];
        default:
            return state;
    }
};

export default sessionErrorsReducer;