Rails.application.routes.draw do
  # devise_for :users
  root to: "candidates#index"
  resources :candidates
end
