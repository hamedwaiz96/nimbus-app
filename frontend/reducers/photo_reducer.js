import { RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_PLACE } from '../actions/place_actions';
import merge from 'lodash/merge';

const photoReducer = (state = {}, action) => {
    switch (action.type) {
        case (RECEIVE_PHOTO):
            return merge({}, state, action.photo)
        case (RECEIVE_PLACE):
            // return merge({}, state, action.photos)
            return action.photos
        default:
            return state;
    }
}

export default photoReducer;