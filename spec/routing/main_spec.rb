require 'spec_helper'

describe 'routing' do

  it "should route / to home#index" do
    get('/').should route_to('home#index')
  end

  it "should route GET /games/new to games#new" do
    get('/games/new').should route_to('games#new')
  end

  it "should route POST /games to games#create" do
    post('/games').should route_to('games#create')
  end

  it "should route GET /games/{key} to games#show" do
    get('/games/abcde').should route_to('games#show', :id => 'abcde')
  end
end
