source 'https://rubygems.org'

gem 'rails', '3.2.8'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'chessmonger', :git => 'git://github.com/AlphaHydrae/chessmonger.git', :branch => 'develop'

# Templating
gem 'haml'

# Authentication
gem 'devise'

# Authorization
gem 'cancan'
gem 'role_model'

# Database Foreign Keys
gem 'foreigner'

group :development do
  gem 'quiet_assets'
  gem 'thin'
end

group :test, :development do
  gem 'sqlite3'
  gem 'test-unit' # prevents an error when generating tests
  gem 'rspec-rails'
  gem 'shoulda'
end

group :test do
  gem 'capybara'
  gem 'database_cleaner'
  gem 'paint' # colored output by specs
  gem 'factory_girl'
end

group :development, :production do
  gem 'pg'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '>= 3.2.3'
  #gem 'coffee-rails', '>= 3.2.1'

  gem 'jquery-rails'
  gem 'jquery-ui-rails'
  gem 'clah-rails'
  gem 'anjlab-bootstrap-rails', '>= 2.1', :require => 'bootstrap-rails'
  gem 'backbone-on-rails'
  gem 'marionette-rails'
  gem 'haml_coffee_assets'
  gem 'execjs'
  gem 'i18n-js'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'
