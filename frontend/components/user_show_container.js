import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../actions/user_actions';
import { getReviewsForUser, getPlacesForUser, getPhotosFiltered} from './selector';

const mapStateToProps = (state, ownProps) => {
    let user_id = parseInt(ownProps.match.params.id)
    let reviews = getReviewsForUser(state.entities.reviews, user_id)
    let places = getPlacesForUser(state.entities.places, reviews)
    return({
        user_id,
        reviews,
        user: state.entities.users[user_id],
        places,
        photos: getPhotosFiltered(state.entities.photos, user_id, places)
    })
};

const mapDispatchToProps = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);