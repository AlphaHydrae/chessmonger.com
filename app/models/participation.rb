class Participation < ActiveRecord::Base

  belongs_to :game
  belongs_to :player, :class_name => 'User'

  validates :game, :presence => true
  validates :player_id, :presence => true, :uniqueness => { :scope => :game_id }
  validates :number, :presence => true, :numericality => { :only_integer => true, :greater_than_or_equal_to => 1 }

  attr_accessible # none
end
