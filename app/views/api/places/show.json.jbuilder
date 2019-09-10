json.place do
    json.partial! "api/places/place", place: @place
end

json.reviews do
    @place.reviews.each do |review|
        json.partial! "api/reviews/review", review: review
    end
end