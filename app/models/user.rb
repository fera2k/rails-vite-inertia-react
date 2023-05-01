# frozen_string_literal: true

class User < ApplicationRecord
  devise :database_authenticatable, :recoverable, :rememberable, :validatable, :lockable
  validate :validate_username
  validates :username, presence: true, uniqueness: { case_sensitive: false }
  validates :username, format: { with: /^[a-zA-Z0-9_.]*$/, multiline: true }

  attr_writer :login

  def login
    @login || username || email
  end

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    conditions[:login]&.downcase!
    if (login = conditions.delete(:login))
      where(conditions.to_h)
        .where(['lower(username) = :value OR lower(email) = :value', { value: login.downcase }]).first
    elsif conditions.key?(:username) || conditions.key?(:email)
      where(conditions.to_h).first
    end
  end

  def validate_username
    return unless User.exists?(email: username)

    errors.add(:username, :invalid)
  end
end
