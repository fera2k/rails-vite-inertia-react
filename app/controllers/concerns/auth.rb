# frozen_string_literal: true

module Auth
  extend ActiveSupport::Concern

  included do
    before_action :authenticate_user!
    before_action :configure_permitted_parameters, if: :devise_controller?
  end

  protected

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || root_path
  end

  def after_sign_out_path_for(_resource_or_scope)
    root_path
  end

  def configure_permitted_parameters
    added_attrs = %w[username email password password_confirmation remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :sign_in, keys: %w[login password]
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
end
