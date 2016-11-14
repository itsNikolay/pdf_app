class CreatePdfDocuments < ActiveRecord::Migration[5.0]
  def change
    create_table :image_to_pdf_documents, id: :uuid do |t|

      t.timestamps
    end
  end
end
