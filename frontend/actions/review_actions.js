import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const receiveReviewErrors = (err) => ({
    type: RECEIVE_REVIEW_ERRORS,
    err
})

export const createReview = (review) => dispatch => (
    APIUtil.createReviewForPlace(review).then((review) => {dispatch(receiveReview(review)); return review}, (err) => dispatch(receiveReviewErrors(err)))
);