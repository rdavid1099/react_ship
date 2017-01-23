require 'rails_helper'

describe 'User clicks log in' do
  it 'enters information and signs in using twitter' do
    user = create_user
    visit root_path
    click_on 'Login Using Twitter'

    expect(page).to have_content('TestTwitter')
    expect(page).to have_content('Logout')
    expect(page).to have_content('Welcome to ReactShip')
    expect(page).to have_current_path(user_path(user))
  end
end
