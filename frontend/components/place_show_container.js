import {connect} from 'react-redux';
import PlaceShow from './place_show';
import {fetchPlace} from '../actions/place_actions';
import { getUsers, getReviews, getPhotos } from './selector';

const mapStateToProps = (state, ownProps) => ({
    state: state,
    id: parseInt(ownProps.match.params.id),
    place: state.entities.places[parseInt(ownProps.match.params.id)],
    authors: getUsers(state.entities.users),
    reviews: getReviews(state.entities.reviews),
    photos: getPhotos(state.entities.photos)
});

const mapDispatchToProps = dispatch => ({
    fetchPlace: (id) => dispatch(fetchPlace(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaceShow);