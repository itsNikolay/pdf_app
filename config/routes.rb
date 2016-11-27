Rails.application.routes.draw do
  root 'welcome#index'

  devise_for :users

  resources :images_to_pdf_documents, only: [:index, :create, :update, :show] do
    resources :images_to_pdf_images, only: [:destroy] do
      member do
        put :move_higher
        put :move_lower
      end
    end
  end
end
