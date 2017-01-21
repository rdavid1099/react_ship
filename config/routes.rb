Rails.application.routes.draw do
  root 'battleships#index'

  resources :users, only: [:show]

  get '/auth/twitter', as: :twitter_login
  get '/auth/twitter/callback', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
end
