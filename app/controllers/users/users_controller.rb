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

      render inertia: 'Admin/Users/New', props: { user: }
    end
  end
end
