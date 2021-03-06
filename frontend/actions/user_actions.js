import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const START_LOADING_USER = 'START_LOADING_USER';
export const RECEIVE_USER_IMAGE_ERRORS = 'RECEIVE_USER_IMAGE_ERRORS';

export const receiveUser = (whole) => ({
    type: RECEIVE_USER,
    whole
});

export const startLoadingUser = () => ({
    type: START_LOADING_USER,
});

export const receiveUserImageErrors = (err) => ({
    type: RECEIVE_USER_IMAGE_ERRORS,
    err
})

export const fetchUser = (id) => dispatch => {
    dispatch(startLoadingUser());
    return APIUtil.fetchUser(id).then((whole) => dispatch(receiveUser(whole)))
}

export const updateUserPhoto = (id, photo) => dispatch => {
    dispatch(startLoadingUser());
    return APIUtil.updateUser(id, photo).then(whole => dispatch(receiveUser(whole)), (err) => {dispatch(receiveUserImageErrors(err));})
}