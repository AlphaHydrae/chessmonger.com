class MakeParticipationPlayerOptional < ActiveRecord::Migration
  def up
    change_column :participations, :player_id, :integer, :null => true
  end

  def down
    change_column :participations, :player_id, :integer, :null => false
  end
end
