Rails.application.routes.draw do
  root 'pdf_documents#index'

  devise_for :users

  resources :pdf_documents, only: [:index, :create, :update]
end
