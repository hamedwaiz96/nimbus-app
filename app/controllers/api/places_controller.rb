class Api::PlacesController < ApplicationController

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
end
