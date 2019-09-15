class Api::PhotosController < ApplicationController
    before_action :require_logged_in

    def create
        @photo = current_user.photos.new(photo_params)
        if @photo.save
            render 'api/photos/show.json.builder'
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def photo_params
        params.require(:photo).permit(:url, :place_id, :user_id)
    end
end
