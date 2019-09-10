import {RECEIVE_PLACES, RECEIVE_PLACE} from '../actions/place_actions';
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
        default:    
            return state;
    }
}

export default placeReducer;