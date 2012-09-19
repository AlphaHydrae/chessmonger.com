require 'spec_helper'

describe 'Registration', :type => :request do

  self.use_transactional_fixtures = false

  after :each do
    DatabaseCleaner.clean
  end

  it "should work" do
    visit_test_server
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

  it "should also work" do
    visit_test_server
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
