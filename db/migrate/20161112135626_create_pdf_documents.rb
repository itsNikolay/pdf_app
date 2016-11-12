class CreatePdfDocuments < ActiveRecord::Migration[5.0]
  def change
    create_table :pdf_documents do |t|
      t.string :pdf_file

      t.timestamps
    end
  end
end
