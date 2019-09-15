import {connect} from 'react-redux';
import ReviewItem from './review_item';
import {createReview} from '../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
    author: state.entities.users[ownProps.review.author_id]
});

const mapDispatchToProps = dispatch => ({
    createReview: (review) => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewItem);