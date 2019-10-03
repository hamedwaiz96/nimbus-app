Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :places, only: [:index, :show, :create]
    resources :reviews, only: [:create]
    resources :photos, only: [:create]
  end
end
