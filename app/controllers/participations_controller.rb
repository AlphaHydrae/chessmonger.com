class ParticipationsController < ApplicationController
  load_and_authorize_resource

  def update
    if @participation.update_attributes params[:participation]
      render :json => @participation.to_json
    else
      render :json => @participation.errors.full_messages, :status => 400
    end
  end
end
