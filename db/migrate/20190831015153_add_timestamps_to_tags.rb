class AddTimestampsToTags < ActiveRecord::Migration[5.2]
  def change
    add_timestamps(:tags)
  end
end
