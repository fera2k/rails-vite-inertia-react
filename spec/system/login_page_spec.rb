# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Login Page' do
  before do
    visit new_user_session_path
  end

  describe 'shows login form' do
    it { expect(page).to have_text('Log In') }
    it { expect(page).to have_field('Email') }
    it { expect(page).to have_field('Password') }
    it { expect(page).to have_button('Sign In') }
    it { expect(page).to have_button('Forgot password?') }
  end

  describe 'tries to login' do
    it 'with invalid credentials' do
      within 'form#login_form' do
        fill_in 'Email', with: 'somebody@example.com'
        fill_in 'Password', with: 'not-valid-password'
        click_on 'Sign In'
      end
      expect(page).to have_content('Email or password is not valid.')
    end
  end
end
