require 'spec_helper'

describe 'home/index' do

  it "should say hello" do
    assign :latest_games, []
    render
    rendered.should include('Hello World')
  end
end
