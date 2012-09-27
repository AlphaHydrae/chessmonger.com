require 'spec_helper'

describe HomeController do

  it "should show the home page" do
    get :index
    response.should be_success
  end

  it "should have no latest games" do
    get :index
    assigns(:latest_games).should be_empty
  end

  context 'with 7 games' do

    before :each do
      @user = FactoryGirl.create(:user)
      @games = []
      7.times do |i| # 7 games in the last 7 days, from oldest to newest
        @games << FactoryGirl.create(:game, :creator => @user, :created_at => Time.now - (7 - i).days)
      end
    end

    it "should get the latest games" do
      get :index
      assigns(:latest_games).tap do |latest_games|
        latest_games.should have(5).items
        latest_games.should include(*@games.last(5))
      end
    end
  end
end
