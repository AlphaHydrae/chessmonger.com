require 'spec_helper'

describe 'home/index' do

  it "should say hello" do
    render
    rendered.should include('Hello World')
  end
end
