SimpleForum::Application.routes.draw do
  resources :comments
  resources :forums
  root to: 'application#index'
end
