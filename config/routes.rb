Rails.application.routes.draw do  
  resources :admins, only: [:index, :show, :create, :update, :destroy]
  resources :reviews, only: [:index, :show, :create, :update, :destroy]
  resources :baked_items, only: [:index, :show, :create, :update, :destroy]


  resources :baked_items 
  get '/baked_items/category/:item_type', to: 'baked_items#items_by_category'



  # resources :baked_items 
  # get '/baked_items/category/:item_type', to: 'baked_items#items_by_category'
    # in controller : def items_by_category with the BakedItem.where(item_type: params[:item_type]) 
    # for frontend: value={"cupcake"} in dropdown






  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
