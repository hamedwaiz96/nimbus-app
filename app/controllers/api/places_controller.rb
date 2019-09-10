class Api::PlacesController < ApplicationController

    def index
        @places = params[:filters] ? Place.handle_filters : Place.all
        if params[:filters][:rating] !== ""
            @rating_filter = params[:filters][:rating].to_f.round(2)
        end
        if params[:filters][:price] !== ""

        end
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
