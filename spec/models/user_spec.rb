require 'rails_helper'

describe User do
  context '#from_omniauth' do
    it 'creates user from omniauth' do
      auth_info = omniauth_mock
      user = User.from_omniauth(auth_info)

      expect(user).to_not eq(false)
    end

    it 'returns false if not all params provided' do
      auth_info = OmniAuth::AuthHash.new({uid: 1})
      user = User.from_omniauth(auth_info)

      expect(user).to eq(false)
    end
  end

  context '#create' do
    it 'defaults record to 0-0' do
      user = User.from_omniauth(omniauth_mock)

      expect(user.wins).to eq(0)
      expect(user.losses).to eq(0)
    end
  end

  context 'validations' do
    it { is_expected.to validate_presence_of(:screen_name) }
    it { is_expected.to validate_presence_of(:name) }
  end

end
