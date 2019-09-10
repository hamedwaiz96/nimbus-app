class Api::ReviewsController < ApplicationController

    def create
        @review = current_user.reviews.new(review_params)
        if @review.save
            render 'api/reviews/show.json.builder'
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def review_params
        params.require(:review).permit(:)
    end
end
