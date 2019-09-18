class RemovePhotoRequirement < ActiveRecord::Migration[5.2]
  def change
    change_column(:places, :photo, :string)
  end
end
