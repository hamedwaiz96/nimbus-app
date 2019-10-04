import {connect} from 'react-redux';
import PlaceShow from './place_show';
import {fetchPlace, fetchPlaces, receiveErrors} from '../actions/place_actions';
import {createPhoto} from '../actions/photo_actions';

import { getUsers, getReviews, getPhotos } from './selector';

const mapStateToProps = (state, ownProps) => ({
    loading: state.ui.loading.detailLoading,
    id: parseInt(ownProps.match.params.id),
    place: state.entities.places[parseInt(ownProps.match.params.id)],
    authors: getUsers(state.entities.users, getReviews(state.entities.reviews, parseInt(ownProps.match.params.id))),
    reviews: getReviews(state.entities.reviews, parseInt(ownProps.match.params.id)),
    photos: getPhotos(state.entities.photos, parseInt(ownProps.match.params.id)),
    session_id: state.session.id,
    place_id: parseInt(ownProps.match.params.id),
    places: state.entities.places,
    user_id: state.session.id,
    errors: state.errors.regular
});

const mapDispatchToProps = dispatch => ({
    fetchPlace: (id) => dispatch(fetchPlace(id)),
    fetchPlaces: () => dispatch(fetchPlaces()),
    createPhoto: (photo) => dispatch(createPhoto(photo)),
    receiveErrors: (err) => dispatch(receiveErrors(err))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceShow);