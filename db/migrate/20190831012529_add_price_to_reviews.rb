class AddPriceToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column(:reviews, :price_rating, :integer)
  end
end
