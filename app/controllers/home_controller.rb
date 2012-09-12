
class HomeController < ApplicationController
  before_filter :authenticate_user!

  def board
    p1 = Chessmonger::Player.new 'John Doe'
    p2 = Chessmonger::Player.new 'Jane Doe'
    rules = Chessmonger::Variants::InternationalChess.new
    game = Chessmonger::Game.new rules, [ p1, p2 ]
    rules.setup game
    res = {
      width: game.rules.board_width,
      height: game.rules.board_height,
      actions: game.rules.current_actions(game)
    }
    board = (res[:board] = [])
    game.board.each do |piece, pos|
      board << {
        :piece => 'fubar',
        :x => pos.x,
        :y => pos.y
      }
    end
    render :json => res
  end
end
