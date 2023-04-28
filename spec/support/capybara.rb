# frozen_string_literal: true

require 'capybara/rspec'
require 'webdrivers'

Capybara.register_driver :selenium_chrome do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end

Capybara.register_driver :headless_chrome do |app|
  options = Selenium::WebDriver::Chrome::Options.new(
    args: %w[headless disable-gpu no-sandbox]
  )
  options.add_argument '--window-size=1400,1400'
  Capybara::Selenium::Driver.new(app, browser: :chrome, options:)
end

Capybara.javascript_driver = :selenium_chrome

RSpec.configure do |config|
  config.before(:each, type: :system) do
    if ENV['SHOW_BROWSER'] == 'true'
      driven_by :selenium_chrome
    else
      # driven_by :selenium, using: :headless_chrome, screen_size: [1400, 1400]
      driven_by :headless_chrome
    end
  end
end
