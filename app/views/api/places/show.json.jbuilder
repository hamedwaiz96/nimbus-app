json.place do
    json.partial! "api/places/place", place: @place
end

@place.reviews.includes(:author).each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end

    json.authors do
        json.set! review.author.id do
            json.partial! 'api/users/user', user: review.author
        end
    end
end

@place.photos.each do |photo|
    json.photos do
        json.set! photo.id do
            json.partial! 'api/photos/photo', photo: photo
        end
    end
end