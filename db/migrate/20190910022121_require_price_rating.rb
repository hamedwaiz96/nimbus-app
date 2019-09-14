class RequirePriceRating < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :price_rating, :integer, :null => false
  end
end
