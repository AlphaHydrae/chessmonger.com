require 'spec_helper'

describe 'Registration', :type => :request do

  it "should work" do
    visit 'http://localhost:3000'
    page.should have_content('Chessmonger')
  end
end
