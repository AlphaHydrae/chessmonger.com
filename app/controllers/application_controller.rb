class ApplicationController < ActionController::Base
  protect_from_forgery

  private

  def render_page contents
    respond_to do |format|
      format.json do
        render :json => contents
      end
      format.html do
        @page_contents = contents
        render '/page'
      end
    end
  end
end
