Rails.application.routes.draw do
  root 'welcome#index'

  devise_for :users

  resources :images_to_pdf_documents, path: 'images_to_pdf', only: [:index, :create, :update, :show]
end
