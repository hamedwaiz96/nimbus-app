import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import merge from 'lodash/merge';

const _nullState = {
    id: null
};

const sessionReducer = (state=_nullState, action) => {
    Object.freeze(state);
    switch(action.type){
        case(RECEIVE_CURRENT_USER):
            let new_state = {
                id: parseInt(Object.keys(action.currentUser)[0])
            };
            return merge({}, state, new_state);
        case(LOGOUT_CURRENT_USER):
            return _nullState;
        default:
            return state;
    }
}

export default sessionReducer;