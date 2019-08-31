class AddTimestampsToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_timestamps(:places)
  end
end
