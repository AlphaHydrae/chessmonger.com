
class HomeController < ApplicationController

  def index
    @latest_games = Game.order('created_at DESC').limit(5).all
  end
end
