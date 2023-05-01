# frozen_string_literal: true

module Users
  class UsersController < ApplicationController
    # TODO: implement authorization

    def index
      users = User.select(:id, :username, :email).all

      render inertia: 'Admin/UsersList', props: {
        users:
      }
    end
  end
end
