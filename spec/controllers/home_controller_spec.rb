require 'spec_helper'

describe HomeController do

  it "should show the home page to guests" do
    get :index
    response.should be_success
  end
end
