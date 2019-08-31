class Photo < ApplicationRecord
    validates :url, :place_id, :user_id, presence: true
end 