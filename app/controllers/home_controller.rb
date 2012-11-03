
class HomeController < ApplicationController

  def index
    render_page({
      :new_game => Game.new( :variant => 'InternationalChess' )
    })
  end
end
