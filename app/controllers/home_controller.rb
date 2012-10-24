
class HomeController < ApplicationController

  def index
    render_page Game.order('created_at DESC').limit(5).all
  end
end
