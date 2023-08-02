# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Users::UsersController do
  before do
    login_user
  end

  describe 'GET #index' do
    it 'returns http success' do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET #new' do
    it 'returns http success' do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST #create' do
    it 'returns http success' do
      user = build(:user)
      post :create, params: { user: { name: user.username, email: user.email, password: user.password } }
      expect(response).to have_http_status(:redirect)
    end
  end

  describe 'GET #edit' do
    it 'returns http success' do
      user = create(:user)
      get :edit, params: { id: user.id }
      expect(response).to have_http_status(:success)
    end
  end

  describe 'PUT #update' do
    it 'returns http success' do
      user = create(:user)
      put :update, params: { 
        id: user.id, user: { username: 'updated username', email: 'updatedemail@test.com' }
      }
      expect(response).to have_http_status(:success)
    end
  end

  describe 'DELETE #destroy' do
    it 'returns http success' do
      user.save
      delete :destroy, params: { id: user.id }
      expect(response).to have_http_status(:success)
    end
  end
end
