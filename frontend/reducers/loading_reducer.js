import {START_LOADING_PLACE, START_LOADING_PLACES, RECEIVE_PLACE, RECEIVE_PLACES} from '../actions/place_actions';
import {START_LOADING_USER} from '../actions/user_actions';
import merge from 'lodash/merge';

const initialState = {
    indexLoading: false,
    detailLoading: false,
}

const loadingReducer = (state=initialState, action) => {
    switch(action.type){
        case(START_LOADING_PLACE):
            return merge({}, state, {detailLoading: true});
        case(START_LOADING_PLACES):
            return merge({}, state, {indexLoading: true})
        case(RECEIVE_PLACE):
            return merge({}, state, {detailLoading: false});
        case(RECEIVE_PLACES):
            return merge({}, state, {indexLoading: false});
        case(START_LOADING_USER):
            return merge({}, state, {detailLoading: true})
        default:    
            return state;
    }
}

export default loadingReducer;