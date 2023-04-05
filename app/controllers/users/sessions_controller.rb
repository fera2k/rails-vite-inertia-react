# frozen_string_literal: true

module Users
  class SessionsController < Devise::SessionsController
    before_action :configure_sign_in_params, only: [:create]

    # GET /resource/sign_in
    def new
      render inertia: 'Auth/Login', props: {
        loginPath: new_user_session_path,
        resetPasswordPath: new_user_password_path
      }
    end

    # POST /resource/sign_in
    def create
      flash.clear
      login_result = catch(:warden) { super }
      return unless login_failed?(login_result)

      redirect_to(new_user_session_path, alert: t('messages.invalid_credentials'))
    end

    # DELETE /resource/sign_out
    def destroy
      super do
        redirect_to(root_path, notice: t('messages.user_logged_out')) and return
      end
    end

    protected

    # If you have extra params to permit, append them to the sanitizer.
    def configure_sign_in_params
      devise_parameter_sanitizer.permit(:sign_in, keys: [:remember])
    end

    def login_failed?(login_result)
      login_result.is_a?(Hash) && login_result.key?(:scope) && login_result.key?(:recall)
    end
  end
end
