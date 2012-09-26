require 'spec_helper'

describe Game do

  before :each do
    @user = create :user
  end

  it "should generate a random 5-character key" do
    keys = []
    3.times do
      create(:game, :creator => @user).key.tap do |key|
        key.should be_present
        key.should match(/\A[a-z0-9]{5}\Z/)
        keys.should_not include(key)
        keys << key
      end
    end
  end

  it "should not change the key when saved" do
    game = create :game, :creator => @user
    game.key.should == game.tap{ |g| g.data = 'fubar'; g.save! }.key
  end

  it "should accept all registered game variants" do
    Chessmonger.rulebook.config.variant_names.each do |variant|
      build(:game, :creator => @user, :variant => variant).valid?.should be_true
    end
  end

  it "should not accept unknown game variants" do
    [ '', 'Unknown', 'Fubar' ].each do |invalid|
      build(:game, :creator => @user, :variant => invalid).valid?.should be_false
    end
  end

  context "validations" do

    subject{ build :game, :creator => @user }

    it{ should validate_presence_of(:creator) }
    it{ should validate_presence_of(:variant) }
    it{ should ensure_length_of(:variant).is_at_most(50) }
  end
end
