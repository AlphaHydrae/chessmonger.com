require 'spec_helper'

describe 'layouts/application' do

  it "should show login and register links to guests" do
    view.should_receive(:user_signed_in?).and_return(false)
    render
    rendered.should have_selector('.navbar a.login')
    rendered.should have_selector('.navbar a.register')
  end

  it "should show the logout link to users" do
    view.should_receive(:user_signed_in?).and_return(true)
    render
    rendered.should have_selector('.navbar a.logout')
  end
end
