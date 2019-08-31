class Place < ApplicationRecord
    validates :name, :street, :street, :city, presence: true

    has_many :reviews
end