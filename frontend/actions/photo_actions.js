import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receivePhoto = (photo) => ({
    type: RECEIVE_PHOTO,
    photo
});

export const createPhoto = (photo) => dispatch => (
    APIUtil.createPhotoForPlace(photo).then((photo) => dispatch(receivePhoto(photo)))
);