class CreatePdfFiles < ActiveRecord::Migration[5.0]
  def change
    create_table :pdf_files do |t|
      t.string :file, null: false
      t.references :pdf_document, foreign_key: true, null: false

      t.timestamps
    end
  end
end
