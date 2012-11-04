class AccountsController < ApplicationController

  def show
    if current_user
      render :json => current_user
    else
      render :nothing => true, :status => 204
    end
  end
end
