import {RECEIVE_REVIEW} from '../actions/review_actions';
import {RECEIVE_PLACE} from '../actions/place_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const reviewReducer = (state={}, action) => {
    switch(action.type){
        case(RECEIVE_REVIEW):
            return merge({}, state, action.review)
        case(RECEIVE_PLACE):
            return merge({}, state, action.reviews)
        case(RECEIVE_USER):
            return merge({}, state, action.whole.reviews)
        default:
            return state;
    }
}

export default reviewReducer;