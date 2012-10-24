class GamesController < ApplicationController
  load_and_authorize_resource :find_by => :key

  def new
    render_page :variants => Variant.all
  end

  def show
    render_page @game
  end

  def create

    @game.implementation.rules.number_of_players.times do |i|
      @game.participations << Participation.new.tap do |p|
        p.game = @game
        p.player = current_user if i == 0
        p.number = i + 1
      end
    end

    if @game.save
      render :json => @game
    else
      render :json => @game.errors, :status => 400
    end
  end
end
