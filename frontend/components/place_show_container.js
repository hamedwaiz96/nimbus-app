import {connect} from 'react-redux';
import PlaceShow from './place_show';
import {fetchPlace} from '../actions/place_actions';
import { getUsers, getReviews, getPhotos } from './selector';

const mapStateToProps = (state, ownProps) => ({
    loading: state.ui.loading.detailLoading,
    id: parseInt(ownProps.match.params.id),
    place: state.entities.places[parseInt(ownProps.match.params.id)],
    authors: getUsers(state.entities.users, getReviews(state.entities.reviews, parseInt(ownProps.match.params.id))),
    reviews: getReviews(state.entities.reviews, parseInt(ownProps.match.params.id)),
    photos: getPhotos(state.entities.photos, parseInt(ownProps.match.params.id))
});

const mapDispatchToProps = dispatch => ({
    fetchPlace: (id) => dispatch(fetchPlace(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceShow);