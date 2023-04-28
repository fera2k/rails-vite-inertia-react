# frozen_string_literal: true

require 'rails_helper'
require 'webdrivers'

RSpec.describe 'Index Page' do
  before do
    driven_by :selenium, using: :chrome
  end

  describe 'index' do
    before do
      visit root_path
    end

    it { expect(page).to have_text('My App') }
    it { expect(page).to have_button('Login') }
  end
end
