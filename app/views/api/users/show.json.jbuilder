json.user do
    json.set! @user.id do
        json.partial! "api/users/user", user: @user
    end
end

@user.reviews.includes(:place).each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end

    json.places do
        json.set! review.place.id do
            json.partial! 'api/places/place', place: review.place
        end
    end
end

@user.photos.each do |photo|
    json.photos do
        json.set! photo.id do
            json.partial! 'api/photos/photo', photo: photo
        end
    end
end