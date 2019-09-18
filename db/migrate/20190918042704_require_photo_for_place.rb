class RequirePhotoForPlace < ActiveRecord::Migration[5.2]
  def change
    change_column(:places, :photo, :string, :null => :false)
  end
end
