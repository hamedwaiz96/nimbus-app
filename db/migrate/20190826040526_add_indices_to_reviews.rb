class AddIndicesToReviews < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :place_id
  end
end
