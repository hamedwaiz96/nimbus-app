class ChangeUserColumnInPlaces < ActiveRecord::Migration[5.2]
  def change
    change_column :places, :user_id, :integer, :null => false
  end
end
