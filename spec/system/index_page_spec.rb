# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Index Page' do
  describe 'index' do
    before do
      visit root_path
    end

    it { expect(page).to have_text('My App') }
    it { expect(page).to have_button('Login') }
  end

  describe 'navigation' do
    before do
      visit root_path
    end

    it 'clicks on login button' do
      click_on 'Login'
      expect(page).to have_current_path(new_user_session_path)
    end
  end
end
