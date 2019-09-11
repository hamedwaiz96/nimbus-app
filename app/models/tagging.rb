class Tagging < ApplicationRecord
    validates :tag_id, :place_id, presence: true

    belongs_to :tag
    belongs_to :place
end