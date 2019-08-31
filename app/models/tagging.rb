class Tagging < ApplicationRecord
    validates :tag_id, :place_id, presence: true
end