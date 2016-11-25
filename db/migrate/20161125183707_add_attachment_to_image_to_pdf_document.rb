class AddAttachmentToImageToPdfDocument < ActiveRecord::Migration[5.0]
  def change
    add_column :image_to_pdf_documents, :attachment, :string
  end
end
