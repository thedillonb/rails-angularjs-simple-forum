SimpleForum::Application.routes.draw do
  resources :forums, :defaults => {format: :json} do
    resources :comments, :defaults => {format: :json}
  end
  root to: 'application#index'
end
