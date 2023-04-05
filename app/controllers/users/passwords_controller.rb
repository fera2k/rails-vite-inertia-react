# frozen_string_literal: true

module Users
  class PasswordsController < Devise::PasswordsController
    respond_to :json

    # GET /user/password/new
    def new
      render inertia: 'Auth/ResetPassword', props: {
        email: '',
        passwordPath: password_path(User)
      }
    end

    # GET /resource/password/edit?reset_password_token=abcdef
    def edit
      super
      render inertia: 'Auth/EditPasswordWithToken', props: {
        passwordPath: user_password_path,
        resetPasswordToken: params[:reset_password_token]
      }
    end

    # POST /resource/password
    def create
      super do
        redirect_to password_request_confirmation_path and return
      end
    end

    # GET /users/passwords#request_confirmation
    def request_confirmation
      render inertia: 'Auth/ResetPasswordConfirmation', props: {
        loginPath: new_user_session_path
      }
    end

    # PUT /resource/password
    # def update
    #   super
    # end

    # protected

    # def after_resetting_password_path_for(resource)
    #   root_path
    # end

    # The path used after sending reset password instructions
    # def after_sending_reset_password_instructions_path_for(resource_name)
    #   super(resource_name)
    # end

    # def after_sending_reset_password_instructions_path_for(_resource)
    #   root_path
    # end
  end
end
