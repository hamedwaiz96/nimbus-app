import * as APIUtil from '../util/place_api_util';

export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const RECEIVE_PLACE = 'RECEIVE_PLACE';

export const receivePlaces = places => ({
    type: RECEIVE_PLACES,
    places
});

export const receivePlace = ({place, reviews}) => ({
    type: RECEIVE_PLACE,
    place,
    reviews
});

export const fetchPlaces = (filter) => dispatch => (
    APIUtil.fetchAllPlaces(filter).then((places) => dispatch(receivePlaces(places)))
);

export const fetchPlace = (id) => dispatch => (
    APIUtil.fetchPlace(id).then((whole) => dispatch(receivePlace(whole)))
);