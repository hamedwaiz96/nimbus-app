import {connect} from 'react-redux';
import ReviewForm from './review_form';
import fetchPlaces from '../actions/place_actions';
import createReview from '../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
    let place_id = ownProps.match.params.place_id
    return({
        place_id,
        places: state.entities.places,
        user_id: state.session.id
    })
};

const mapDispatchToProps = dispatch => ({
    fetchPlaces: () => dispatch(fetchPlaces()),
    createReview: (review) => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);