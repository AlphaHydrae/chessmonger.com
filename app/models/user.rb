class User < ActiveRecord::Base
  
  # Role-based authorization
  include RoleModel
  roles :admin

  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :email, :length => { :maximum => 255 }

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me

  def serializable_hash options = nil
    {
      :id => id,
      :name => email
    }
  end
end
