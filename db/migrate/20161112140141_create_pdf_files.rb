class CreatePdfFiles < ActiveRecord::Migration[5.0]
  def change
    create_table :image_to_pdf_images, id: :uuid do |t|
      t.string :attachment, null: false
      t.references :image_to_pdf_document, type: :uuid, null: false

      t.timestamps
    end
  end
end
