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
    let(:user) { build(:user) }

    it 'redirects to index' do
      post :create, params: { user: build_post_body(user) }
      expect(response).to redirect_to(admin_users_path)
    end

    it 'has a notice flash message' do
      post :create, params: { user: build_post_body(user) }
      expect(flash[:notice]).to eq(I18n.t('users.create.success'))
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
    let(:user) { create(:user) }

    it 'redirects to edit' do
      put :update, params: {
        id: user.id, user: { username: 'updated username', email: 'updated_email@test.com' }
      }
      expect(response).to redirect_to(edit_admin_user_path(user.id))
    end

    it 'has a notice flash message' do
      put :update, params: {
        id: user.id, user: { username: 'updated_username', email: 'updated_email@test.com' }
      }
      expect(flash[:notice]).to eq(I18n.t('users.update.success'))
    end
  end

  describe 'DELETE #destroy' do
    let(:user) { create(:user) }

    it 'redirects to index' do
      delete :destroy, params: { id: user.id }
      expect(response).to redirect_to(admin_users_path)
    end

    it 'has a notice flash message' do
      delete :destroy, params: { id: user.id }
      expect(flash[:notice]).to eq(I18n.t('users.destroy.success'))
    end
  end

  def build_post_body(user)
    {
      username: user.username,
      email: user.email,
      password: user.password,
      password_confirmation: user.password
    }
  end
end
