# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User do
  let(:user) { build(:user) }

  it 'has a valid factory' do
    expect(user).to be_valid
  end

  it 'has been correctly saved' do
    user.save
    expect(described_class.find(user.id)).to eq(user)
  end
end
