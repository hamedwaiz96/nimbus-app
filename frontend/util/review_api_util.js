export const createReviewForPlace = (review) => (
    $.ajax({
        url: `api/reviews`,
        method: 'POST',
        data: {review}
    })
);