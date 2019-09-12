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
                places = places.where('id IN (?)', self.find_common_places(value))
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

    def self.find_common_places(tags)
        places = []
        tag_hash = {}
        results = Tagging.where('taggings.tag_id IN (?)', tags)
        Place.all.each do |place|
            places.push(place['id']) 
        end
        tags.each do |tag|
            tag_hash[tag] = []
        end
        results.each do |result|
            tag_hash[result['tag_id'].to_s].push(result['place_id'])
        end
        tag_hash.each do |key, values|
            places = places & values
        end
        return places
    end     
end