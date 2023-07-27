# frozen_string_literal: true

module Users
  class UsersController < ApplicationController
    # TODO: implement authorization

    def index
      users = User.select(:id, :username, :email).all

      render inertia: 'Admin/Users/List', props: { users:, newPath: new_admin_user_path }
    end

    def new
      user = User.new

      render inertia: 'Admin/Users/New', props: { user:, userPostPath: admin_users_path }
    end

    def create
      @user = User.new(user_params)
      if @user.save
        redirect_to(admin_users_path, notice: t('users.create.success'))
      else
        redirect_to(new_admin_user_path, alert: t('users.create.error'), inertia: { errors: @user.errors })
      end
    end

    private

    def user_params
      params
        .require(:user)
        .permit(:username, :email, :password)
    end
  end
end
