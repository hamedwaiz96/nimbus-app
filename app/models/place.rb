class Place < ApplicationRecord
    validates :name, :location, :hours, presence: true

    has_many :reviews
    has_many :taggings, dependent: :destroy
    has_many :tags, through: :taggings

    def self.handle_filters(filters)
        places = Place.all
        filters.each do |filter, value|
            if value === "" || filter === "checked"
                next
            elsif filter === 'search'
                places = places.where('lower(name) LIKE ?', value.downcase + '%')
            elsif filter === 'tags' && !(value.empty?)
                value.each do |tag|
                    places = places.joins(:taggings).where('taggings.tag_id IN (?)', tag)
                end
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