class CreateGames < ActiveRecord::Migration

  def change

    create_table :games do |t|

      t.string :key, :limit => 5, :null => false
      t.string :variant, :limit => 50, :null => false
      t.text :data
      t.references :creator, :null => false

      t.timestamps
      t.timestamp :started_at
      t.timestamp :ended_at
    end

    add_index :games, :key, :unique => true
    add_foreign_key :games, :users, :column => :creator_id
  end
end
