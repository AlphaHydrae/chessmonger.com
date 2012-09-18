require 'spec_helper'

describe 'Registration', :type => :request do

  it "should work" do
    visit 'http://localhost:3000'
    page.should have_content('Chessmonger')
    find('.devise-links .register').click
    within '#register' do
      fill_in 'user_email', :with => 'test@alphahydrae.com'
      fill_in 'user_password', :with => '123456'
      fill_in 'user_password_confirmation', :with => '123456'
      find('.btn-primary').click
    end
    page.should have_content('Logout')
  end
end
