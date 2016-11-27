class AddIndexToImagesDocument < ActiveRecord::Migration[5.0]
  def change
    add_index :image_to_pdf_images, [:id, :image_to_pdf_document_id]
  end
end
