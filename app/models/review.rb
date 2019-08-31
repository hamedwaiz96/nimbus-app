class Review < ApplicationRecord
    validates :rating, :author_id, :place_id, presence: true

    belongs_to :place
    belongs_to :author,
        class_name: 'User',
        foreign_key: :author_id
end