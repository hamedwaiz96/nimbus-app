class AddHoursToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column(:places, :hours, :string, null: false)
  end
end
