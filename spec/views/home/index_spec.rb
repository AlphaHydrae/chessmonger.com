require 'spec_helper'

describe 'home/index' do

  it "should say hello" do

    assign :latest_games, []
    view.should_receive(:can?).and_return(false)
    render

    rendered.should include('Hello World')
  end
end
