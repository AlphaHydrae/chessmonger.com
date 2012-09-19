require 'spec_helper'

describe User do

  its(:roles_mask){ should == 0 }

  context "validations" do

    subject{ build :user, :email => 'janedoe@chessmonger.com' }

    it{ should validate_presence_of(:email) }
    it{ should ensure_length_of(:email).is_at_most(255) }
    it{ should validate_format_of(:email).with('12345').with_message(/12345/) }
    it{ should validate_format_of(:email).with('z').with_message(/z/) }
    it{ should validate_format_of(:email).with('john.doe@').with_message(/john\.doe\@/) }
    it{ should validate_format_of(:email).with('@chessmonger.com').with_message(/\@chessmonger\.com/) }

    it{ should ensure_length_of(:password).is_at_least(6).is_at_most(128) }

    context "with an existing user" do

      before :each do
        create :user
      end

      it{ should validate_uniqueness_of(:email) }
    end
  end

  context "mass assignment" do

    [ :email, :password, :password_confirmation, :remember_me ].each do |attr|
      it{ should allow_mass_assignment_of attr }
    end

    [
      :encrypted_password, :reset_password_token, :reset_password_sent_at, :remember_created_at, :sign_in_count,
      :current_sign_in_at, :last_sign_in_at, :current_sign_in_ip, :last_sign_in_ip, :created_at, :updated_at, :roles_mask
    ].each do |attr|
      it{ should_not allow_mass_assignment_of attr }
    end
  end
end
