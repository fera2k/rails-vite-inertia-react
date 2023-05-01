# frozen_string_literal: true

FactoryBot.define do
  password = Faker::Internet.password
  factory :user do
    email { Faker::Internet.email }
    username { Faker::Internet.username }
    password { password }
    password_confirmation { password }
  end
end
