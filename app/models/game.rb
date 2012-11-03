class Game < ActiveRecord::Base

  before_create :set_key
  after_save :clear_cache

  belongs_to :creator, :class_name => 'User'
  has_many :participations, :order => 'number'

  default_scope includes(:participations)

  validates :creator, :presence => true
  validates :variant, :presence => true, :game_variant => true, :length => { :maximum => 50 }

  attr_accessible :variant

  def serializable_hash options = nil
    Hash.new.tap do |h|

      unless new_record?
        h[:id] = id
        h[:key] = key
      end

      h[:variant] = variant
      h[:human_variant] = Variant.get(variant).human_name
      h[:creator] = creator.serializable_hash(options) if creator
      h[:created_at] = I18n.l(created_at, :format => :long) if created_at
      h[:number_of_players] = implementation.rules.number_of_players

      unless new_record?
        h[:actions] = implementation.rules.current_actions(implementation).collect do |action|
          {
            player: implementation.players.index(action.player),
            origin: {
              x:  action.origin.x,
              y:  action.origin.y
            },
            target: {
              x: action.target.x,
              y: action.target.y
            }
          }
        end
        h[:participations] = participations.collect{ |p| p.serializable_hash(options) }
      end

      h[:board] = {
        width: implementation.rules.board_width,
        height: implementation.rules.board_height,
        pieces: []
      }
      armory = Chessmonger.rulebook.config.variant('InternationalChess').armory
      implementation.board.each do |piece,pos|
        h[:board][:pieces] << {
          piece: armory.identify(piece.behavior),
          player: implementation.players.index(piece.player),
          x: pos.x,
          y: pos.y
        }
      end
    end
  end

  def implementation
    return @impl if @impl
    p1 = Chessmonger::Player.new 'John Doe'
    p2 = Chessmonger::Player.new 'Jane Doe'
    rules = Chessmonger::Variants::InternationalChess.new
    game = Chessmonger::Game.new rules, [ p1, p2 ]
    rules.setup game
    @impl = game
  end

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

  def clear_cache
    @impl = nil
  end

  def self.random_key
    String.new.tap{ |s| KEY_LENGTH.times{ s << KEY_CHARS[rand(36)] } }
  end

  def self.unique_key
    while find_by_key(k = random_key).present?; end
    k
  end
end
