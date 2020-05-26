Rails.application.routes.draw do
  resources :reviews
  resources :orders
  resources :products
  resources :carts
  resources :users
  post('/login', to: 'authentication#login')
  # get '/cart/:id', to: "cart#checkout"


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
