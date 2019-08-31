class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.integer :author_id, null: false
      t.integer :place_id, null: false
      t.string :body
      t.timestamps
    end
  end
end
