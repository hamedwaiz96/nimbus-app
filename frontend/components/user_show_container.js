import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchUser, updateUserPhoto, receiveUserImageErrors} from '../actions/user_actions';
import { getReviewsForUser, getPlacesForUser, getPhotosForUser, getPhotosObject, getReviewsObject} from './selector';

const mapStateToProps = (state, ownProps) => {
    let user_id = parseInt(ownProps.match.params.id)
    let reviews = getReviewsForUser(state.entities.reviews, user_id)
    let photos = getPhotosForUser(state.entities.photos, user_id)
    let places = getPlacesForUser(state.entities.places, reviews, photos)
    return({
        user_id,
        reviews: getReviewsObject(reviews, places),
        user: state.entities.users[user_id],
        places,
        photos: getPhotosObject(photos, places),
        session_id: state.session.id
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUserPhoto: (id, photo) => dispatch(updateUserPhoto(id, photo)),
    receiveErrors: (err) => dispatch(receiveUserImageErrors(err))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);