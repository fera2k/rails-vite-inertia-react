# frozen_string_literal: true

require 'active_support/concern'

# Make flash messages available as shared data
#
module InertiaFlash
  extend ActiveSupport::Concern

  included do
    inertia_share flash: lambda {
      {
        success: flash.notice,
        alert: flash.alert
      }
    }
  end
end
