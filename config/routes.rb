Rails.application.routes.draw do
 

  get '/post/:id', to: 'posts#show'
  get '/posts', to: 'posts#index'
  post '/login', to: 'users#login'
  post '/forgot_password', to: 'users#forgot_password'
end
