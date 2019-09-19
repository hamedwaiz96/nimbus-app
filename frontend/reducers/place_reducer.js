import {RECEIVE_PLACES, RECEIVE_PLACE} from '../actions/place_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const placeReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_PLACES):
            return action.places
        case(RECEIVE_PLACE):
            let new_state = {
                [action.place.id]: action.place
            };
            return merge({}, state, new_state)
        case(RECEIVE_USER):
            return merge({}, state, action.whole.places)
        default:    
            return state;
    }
}

export default placeReducer;