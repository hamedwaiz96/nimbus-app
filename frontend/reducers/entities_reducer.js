import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import placeReducer from './place_reducer';
import reviewReducer from './review_reducer';
import photoReducer from './photo_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    places: placeReducer,
    reviews: reviewReducer,
    photos: photoReducer
});

export default entitiesReducer;