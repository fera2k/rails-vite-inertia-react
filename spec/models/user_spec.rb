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

  it 'has been correctly loaded' do
    user.save
    user2 = described_class.find(user.id)
    expect(user2).to eq(user)
  end

  it 'has been correckly updated' do
    user.save
    user.update(username: 'new name')
    expect(user.username).to eq('new name')
  end

  it 'has been correckly deleted' do
    user.save
    user.destroy
    expect(described_class.find_by(id: user.id)).to be_nil
  end

  it 'has been able to update password' do
    user.save
    user.update(password: 'new password')
    expect(user.password).to eq('new password')
  end
end
