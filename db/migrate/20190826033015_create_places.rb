class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :name, null: false
      t.string :tags, array: true, default: []
      t.string :street, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.integer :zip
      t.string :phone
      t.string :website
      t.string :photo
    end
  end
end
