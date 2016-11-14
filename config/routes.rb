Rails.application.routes.draw do
  root 'image_to_pdf_documents#index'

  devise_for :users

  resources :image_to_pdf_documents, only: [:index, :create, :update, :show]
end
