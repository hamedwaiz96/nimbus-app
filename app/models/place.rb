class Place < ApplicationRecord
    validates :name, :location, :hours, presence: true

    has_many :reviews
end