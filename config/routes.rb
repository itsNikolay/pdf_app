Rails.application.routes.draw do
  root 'pdf_documents#index'

  devise_for :users

  resource :pdf_documents, only: [:index, :create]
end
