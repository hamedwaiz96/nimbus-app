class Api::PlacesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        @places = params[:filter] ? Place.handle_filters(params[:filter]) : Place.all
        render 'api/places/index.json.jbuilder'
    end

    def show
        @place = Place.find(params[:id])
        if @place
            render 'api/places/show.json.jbuilder'
        else
            render json: @place.errors.full_messages, status: 404
        end
    end

    def create
        @place = current_user.places.new(place_params)
        if @place.save
            if not params[:place][:tags].nil?
                params[:place][:tags].each do |tag|
                    Tagging.create!({
                        'tag_id': tag.to_i,
                        'place_id': @place.id
                    })
                end
            end
            render 'api/places/show.json.jbuilder'
        else
            render json: @place.errors.full_messages, status: 422
        end
    end

    def place_params
        params.require(:place).permit(:user_id, :photo, :name, :hours, :location)
    end
end
