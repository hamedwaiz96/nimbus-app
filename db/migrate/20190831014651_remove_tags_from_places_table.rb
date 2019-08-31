class RemoveTagsFromPlacesTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :places, :tags
  end
end
