import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const createReview = (place_id, review) => dispatch => (
    APIUtil.createReviewForPlace(place_id, review).then((review) => dispatch(receiveReview(review)))
);