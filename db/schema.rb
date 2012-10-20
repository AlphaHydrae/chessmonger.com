# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121020143216) do

  create_table "games", :force => true do |t|
    t.string   "key",        :limit => 5,  :null => false
    t.string   "variant",    :limit => 50, :null => false
    t.text     "data"
    t.integer  "creator_id",               :null => false
    t.datetime "created_at",               :null => false
    t.datetime "updated_at",               :null => false
    t.datetime "started_at"
    t.datetime "ended_at"
  end

  add_index "games", ["key"], :name => "index_games_on_key", :unique => true

  create_table "participations", :force => true do |t|
    t.integer  "number",     :null => false
    t.integer  "game_id",    :null => false
    t.integer  "player_id",  :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "participations", ["game_id", "number"], :name => "index_participations_on_game_id_and_number", :unique => true
  add_index "participations", ["game_id", "player_id"], :name => "index_participations_on_game_id_and_player_id", :unique => true

  create_table "users", :force => true do |t|
    t.string   "email",                                 :null => false
    t.string   "encrypted_password",                    :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                            :null => false
    t.datetime "updated_at",                            :null => false
    t.integer  "roles_mask",             :default => 0, :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

  add_foreign_key "games", "users", :name => "games_creator_id_fk", :column => "creator_id"

  add_foreign_key "participations", "games", :name => "participations_game_id_fk"
  add_foreign_key "participations", "users", :name => "participations_player_id_fk", :column => "player_id"

end
