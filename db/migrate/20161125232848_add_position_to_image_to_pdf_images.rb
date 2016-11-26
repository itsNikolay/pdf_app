class AddPositionToImageToPdfImages < ActiveRecord::Migration[5.0]
  def change
    add_column :image_to_pdf_images, :position, :integer, default: 0
    add_index :image_to_pdf_images, [:id, :position]
  end
end
