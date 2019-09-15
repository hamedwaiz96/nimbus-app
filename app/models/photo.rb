class Photo < ApplicationRecord
    validates :url, :place_id, :user_id, presence: true

    belongs_to :place
    belongs_to :user,
        class_name: 'User',
        foreign_key: :user_id
end 