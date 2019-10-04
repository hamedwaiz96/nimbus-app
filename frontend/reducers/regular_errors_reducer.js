import {RECEIVE_ERRORS, RECEIVE_PLACE} from '../actions/place_actions';
import {RECEIVE_REVIEW_ERRORS} from '../actions/review_actions';
import {RECEIVE_USER_IMAGE_ERRORS} from '../actions/user_actions';
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
        case(RECEIVE_REVIEW_ERRORS):
            return [...action.err.responseJSON]
        case(RECEIVE_USER_IMAGE_ERRORS):
            return [...action.err.responseJSON]
        case(RECEIVE_PLACE):
            return [];
        default:
            return state;
    }
}

export default regularErrorsReducer;