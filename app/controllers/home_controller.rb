# frozen_string_literal: true

class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index main]

  def index
    render inertia: 'Index', props: {
      targetLoginUrl: new_user_session_path
    }
  end

  def main
    redirect_to home_index_path and return unless user_signed_in?

    render inertia: 'Main'
  end
end
