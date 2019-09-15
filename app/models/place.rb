class Place < ApplicationRecord
    validates :name, :location, :hours, presence: true

    has_many :reviews
    has_many :taggings, dependent: :destroy
    has_many :tags, through: :taggings
    has_many :photos, dependent: :destroy

    def self.handle_filters(filters)
        places = Place.all
        filters.each do |filter, value|
            if value === "" || filter === "checked"
                next
            elsif filter === 'search'
                places = places.where('lower(name) LIKE ?', value.downcase + '%')
            elsif filter === 'location' && !(value.empty?)
                places = places.where('location IN (?)', value)
            elsif filter === 'tags' && !(value.empty?)
                places = places.joins(:taggings).where('taggings.tag_id IN (?)', value)
            elsif filter === 'price' && !(value.empty?)
                places = places.where('places.id IN (?)', self.find_prices(places, value))
            elsif filter === 'rating' && !(value.empty?)
                places = places.where('places.id IN (?)', self.find_ratings(places, value))
            end
        end
        return places
    end

    def average_rating
        reviews.average(:rating).to_f.round(2)
    end

    def average_price
        reviews.average(:price_rating).to_f.round(2)
    end

    def self.find_prices(places, prices)
        new_places = []
        places.each do |place|
            if prices.include?(place.average_price.round().to_s) 
                new_places.push(place['id'])
            end
        end
        return new_places
    end     

    def self.find_ratings(places, ratings)
        new_places = []
        places.each do |place|
            if ratings.include?(place.average_rating.round().to_s) 
                new_places.push(place['id'])
            end
        end
        return new_places
    end     

    def review_count
        reviews.count
    end

    def tags 
        full_tag = ""
        idx = -1
        tags = Tag.joins(:taggings).where('taggings.place_id = ?', self.id)
        tags_count = tags.count
        tags.each do |tag|
            idx += 1
            comma = (idx === tags_count - 1) ? "" : ", "
            full_tag = full_tag + tag.name + comma
        end
        return full_tag
    end
end