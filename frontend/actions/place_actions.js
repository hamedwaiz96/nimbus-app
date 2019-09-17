import * as APIUtil from '../util/place_api_util';

export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const RECEIVE_PLACE = 'RECEIVE_PLACE';
export const START_LOADING_PLACE = 'START_LOADING_PLACE';
export const START_LOADING_PLACES = 'START_LOADING_PLACES';

export const receivePlaces = places => ({
    type: RECEIVE_PLACES,
    places
});

export const receivePlace = ({place, reviews, authors, photos}) => ({
    type: RECEIVE_PLACE,
    place,
    reviews,
    authors,
    photos
});

export const startLoadingPlace = () => ({
    type: START_LOADING_PLACE,
});

export const startLoadingPlaces = () => ({
    type: START_LOADING_PLACES,
});

export const fetchPlaces = (filter) => dispatch => {
    dispatch(startLoadingPlaces());
    return APIUtil.fetchAllPlaces(filter).then((places) => dispatch(receivePlaces(places)))
};

export const fetchPlace = (id) => dispatch => {
    dispatch(startLoadingPlace());
    return APIUtil.fetchPlace(id).then((whole) => dispatch(receivePlace(whole)))
};

export const createPlace = (place) => dispatch => {(
    APIUtil.createPlace(place).then((place) => dispatch(receivePlace(place)))
)};

