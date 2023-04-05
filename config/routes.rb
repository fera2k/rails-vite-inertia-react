# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#main'
  get '/index', to: 'home#index', as: :home_index

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    passwords: 'users/passwords'
  }

  devise_scope :user do
    get 'users/password/request_confirmation',
        to: 'users/passwords#request_confirmation',
        as: :password_request_confirmation
  end
end
