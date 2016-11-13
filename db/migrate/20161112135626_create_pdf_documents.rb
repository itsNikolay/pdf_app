class CreatePdfDocuments < ActiveRecord::Migration[5.0]
  def change
    create_table :pdf_documents, id: :uuid do |t|

      t.timestamps
    end
  end
end
