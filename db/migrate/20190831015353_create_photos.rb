class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :url, null: false
      t.integer :place_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
