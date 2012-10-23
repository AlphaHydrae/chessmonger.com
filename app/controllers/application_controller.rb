class ApplicationController < ActionController::Base
  protect_from_forgery

  private

  def render_page contents
    if request.xhr?
      render :json => contents
    else
      @page_contents = contents
      render '/page'
    end
  end
end
