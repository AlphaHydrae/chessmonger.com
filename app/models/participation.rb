class Participation < ActiveRecord::Base

  belongs_to :game
  belongs_to :player, :class_name => 'User'

  validates :game, :presence => true
  validates :player_id, :uniqueness => { :scope => :game_id }
  validates :player_id, :immutable => true, :if => :player
  validates :number, :presence => true, :numericality => { :only_integer => true, :greater_than_or_equal_to => 1 }

  attr_accessible :player_id

  def serializable_hash options = nil
    Hash.new.tap do |h|
      h[:id] = id
      h[:player] = player.serializable_hash(options) if player
    end
  end
end
