class CreateParticipations < ActiveRecord::Migration

  def change

    create_table :participations do |t|
      
      t.integer :number, :null => false
      t.references :game, :null => false
      t.references :player, :null => false

      t.timestamps
    end

    add_index :participations, [ :game_id, :number ], :unique => true
    add_index :participations, [ :game_id, :player_id ], :unique => true
    add_foreign_key :participations, :games, :column => :game_id
    add_foreign_key :participations, :users, :column => :player_id
  end
end
