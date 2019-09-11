@places.each do |place|
    if @rating_filter && @price_filter
        if @rating_filter === place.average_rating and @price_filter === place.average_price
            json.set! place.id do
                json.partial! "api/places/place", place: place
            end
        else
            next
        end
    elsif @rating_filter
        if @rating_filter === place.average_rating
            json.set! place.id do
                json.partial! "api/places/place", place: place
            end
        else
            next
        end
    elsif @price_filter 
        if @price_filter === place.average_price
            json.set! place.id do
                json.partial! "api/places/place", place: place
            end
        else
            next
        end
    else
        json.set! place.id do
            json.partial! "api/places/place", place: place
        end
    end
end