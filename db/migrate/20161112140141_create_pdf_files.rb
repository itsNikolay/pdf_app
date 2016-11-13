class CreatePdfFiles < ActiveRecord::Migration[5.0]
  def change
    create_table :pdf_files, id: :uuid do |t|
      t.string :file, null: false
      t.references :pdf_document, type: :uuid, null: false

      t.timestamps
    end
  end
end
