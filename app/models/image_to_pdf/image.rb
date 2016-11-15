class ImageToPdf::Image < ApplicationRecord
  self.table_name = :image_to_pdf_images

  belongs_to :image_to_pdf_document, class_name: 'ImageToPdf::Document',
    foreign_key: :image_to_pdf_document_id

  mount_uploader :attachment, FileUploader
end