class Place < ApplicationRecord
    validates :name, :location, :hours, presence: true

    has_many :reviews

    def self.handle_filters(filters)
        places = Place.all
        filters.each do |filter, value|
            if filter === 'search'
                places = places.where('lower(name) LIKE ?%', value.lower())
            elsif filter === 'tags' && !(value.empty?)
                places = places.joins(:taggings).where('taggings.tag_id IN ?', value)
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
end