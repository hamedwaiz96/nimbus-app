import {RECEIVE_ERRORS, RECEIVE_PLACE} from '../actions/place_actions';
import merge from 'lodash/merge';

const regularErrorsReducer = (state = [], action) => {
    switch(action.type){
        case(RECEIVE_ERRORS):
            if('response' in action.err){
                console.log(action.err);
                return merge([], state, ["Image Upload Error"]);
            } else {
                console.log(action.err)
                return [...action.err];
            }
        case(RECEIVE_PLACE):
            return [];
        default:
            return state;
    }
}

export default regularErrorsReducer;