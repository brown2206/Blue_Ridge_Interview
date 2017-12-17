Rails.application.routes.draw do

  root "home#index"

  resources :candidates

  devise_for :users, controllers: { registrations: "registrations" }
end
