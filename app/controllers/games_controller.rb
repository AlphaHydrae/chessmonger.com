class GamesController < ApplicationController
  load_and_authorize_resource :find_by => :key

  def new
    @variants = Variant.all
  end

  def create

    @game.participations << Participation.new.tap do |p|
      p.game = @game
      p.player = current_user
      p.number = 1
    end

    if @game.save
      redirect_to game_path(@game)
    else
      render :json => @game.errors.full_messages
    end
  end

  def show
    respond_to do |format|
      format.html
      format.json do

        g = game
        json = {
          width: g.rules.board_width,
          height: g.rules.board_height,
          actions: g.rules.current_actions(g)
        }

        json[:actions] = []
        g.rules.current_actions(g).each do |action|
          json[:actions] << {
            :player => g.players.index(action.player),
            :origin => {
              :x => action.origin.x,
              :y => action.origin.y
            },
            :target => {
              :x => action.target.x,
              :y => action.target.y
            }
          }
        end

        json[:board] = []
        armory = Chessmonger.rulebook.config.variant('InternationalChess').armory
        g.board.each do |piece,pos|
          json[:board] << {
            :piece => armory.identify(piece.behavior),
            :player => g.players.index(piece.player),
            :x => pos.x,
            :y => pos.y
          }
        end

        render :json => json
      end
    end
  end

  private

  def game
    p1 = Chessmonger::Player.new 'John Doe'
    p2 = Chessmonger::Player.new 'Jane Doe'
    rules = Chessmonger::Variants::InternationalChess.new
    game = Chessmonger::Game.new rules, [ p1, p2 ]
    rules.setup game
    game
  end
end
