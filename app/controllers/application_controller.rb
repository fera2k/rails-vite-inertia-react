# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Auth
  include InertiaCsrf
  include InertiaFlash
  include InertiaJson

  inertia_share auth: lambda {
    if user_signed_in?
      {
        user: current_user.as_json(only: %i[id email])
      }
    end
  }
end
