import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_PLACE} from '../actions/place_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (state={}, action) => {
    Object.freeze(state)
    switch(action.type){
        case(RECEIVE_CURRENT_USER):
            if('user' in action.currentUser){
                return merge({}, state, action.currentUser.user)
            }
            let first_key = action.currentUser.id
            return merge({}, state, {[first_key]: action.currentUser});
        case(RECEIVE_PLACE):
            return merge({}, state, action.authors)
        case(RECEIVE_USER): 
            return merge({}, state, action.whole.user)
        default:
            return state;
    }
}

export default usersReducer;