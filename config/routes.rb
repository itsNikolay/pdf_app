Rails.application.routes.draw do
  root 'pdf_documents#index'

  devise_for :users

  resource :pdf_documents do
    get :index
  end
end
