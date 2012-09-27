class GamesController < ApplicationController
  load_and_authorize_resource :find_by => :key

  def new
    @variants = Chessmonger.rulebook.config.variant_names
  end

  def create
    if @game.save
      redirect_to game_path(@game)
    else
      render :json => @game.errors.full_messages
    end
  end
end
