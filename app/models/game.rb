class Game < ActiveRecord::Base

  before_create :set_key

  belongs_to :creator, :class_name => 'User'
  has_many :participations

  default_scope includes(:participations)

  validates :creator, :presence => true
  validates :variant, :presence => true, :game_variant => true, :length => { :maximum => 50 }

  attr_accessible :variant

  def variant_object
    Variant.get variant
  end

  def to_param
    self.key
  end

  private

  KEY_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789'
  KEY_LENGTH = 5

  def set_key
    self.key = self.class.unique_key
  end

  def self.random_key
    String.new.tap{ |s| KEY_LENGTH.times{ s << KEY_CHARS[rand(36)] } }
  end

  def self.unique_key
    while find_by_key(k = random_key).present?; end
    k
  end
end
