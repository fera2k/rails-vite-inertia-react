# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '~> 3.2'

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem 'rails', '~> 7.1'

# Use sqlite3 as the database for Active Record
gem 'sqlite3', '~> 1.7'

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma', '~> 6.4'

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem 'jbuilder', '~> 2.11'

# Use Redis adapter to run Action Cable in production
# gem "redis", "~> 4.0"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '~> 1.17', require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing', "~> 1.2"

# Gems added to the project
gem 'dalli', '~> 3.2'
gem 'devise', '~> 4.9'
gem 'inertia_rails', '~> 3.1'
gem 'vite_rails', '~> 3.0'

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem 'debug', '~> 1.9', platforms: %i[mri mingw x64_mingw]

  gem 'pry-byebug', '~> 3.10'

  # Test Tools
  gem 'factory_bot_rails', '~> 6.4'
  gem 'faker', '~> 3.2'
  gem 'rspec-rails', '~> 6.1'

  # DotEnv
  gem 'dotenv-rails'
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem 'web-console', '~> 4.2'

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem 'rack-mini-profiler'

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem 'spring'

  # Guard for automatically running specs
  gem 'guard-rspec', require: false

  # Rubocop extensions
  gem 'rubocop-capybara', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec', require: false

  # Support for Ruby Language Server / VSCode Integration
  gem 'ruby-lsp', '~> 0.13'
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem 'capybara', '~> 3.39'
  gem 'selenium-webdriver', '~> 4.16'
end
