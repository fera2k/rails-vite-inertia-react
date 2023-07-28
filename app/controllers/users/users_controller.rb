# frozen_string_literal: true

module Users
  class UsersController < ApplicationController
    # TODO: implement authorization

    def index
      users = User.select(:id, :username, :email).all

      render inertia: 'Admin/Users/List', props: {
        users:,
        newPath: new_admin_user_path,
        editPath: edit_admin_user_path(0)
      }
    end

    def new
      user = User.new

      render inertia: 'Admin/Users/New', props: { user:, userPostPath: admin_users_path }
    end

    def edit
      user = User.find(params[:id])

      render inertia: 'Admin/Users/Edit', props: { user:, userPutPath: admin_user_path(user) }
    end

    def create
      user = User.new(user_params)
      if user.save
        redirect_to(admin_users_path, notice: t('users.create.success'))
      else
        redirect_to(new_admin_user_path, alert: t('users.create.error'), inertia: { errors: user.errors })
      end
    end

    def update
      user = User.find(params[:id])
      if user.update(user_params)
        redirect_to(admin_users_path, notice: t('users.update.success'))
      else
        redirect_to(edit_admin_user_path(user), alert: t('users.update.error'), inertia: { errors: user.errors })
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
