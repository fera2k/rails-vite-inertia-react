# frozen_string_literal: true

# rubocop:disable Rails/I18nLocaleTexts

class NotificationTestMailer < ApplicationMailer
  default from: 'fera_br@yahoo.com.br'

  def notification(user)
    @user = user
    mail(to: @user.email, subject: 'test notification')
  end
end

# rubocop:enable Rails/I18nLocaleTexts
