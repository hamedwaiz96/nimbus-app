class FixPlacesLocation < ActiveRecord::Migration[5.2]
  def change
    remove_column :places, :street
    remove_column :places, :state
    remove_column :places, :city
    remove_column :places, :zip
    remove_column :places, :phone
    remove_column :places, :website
    add_column(:places, :location, :string, null: false)
  end
end
