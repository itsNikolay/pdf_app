class ImageToPdf::Document < ApplicationRecord
  self.table_name = :image_to_pdf_documents

  # NOTE: :foreign_key required with AR module
  has_many :image_to_pdf_images, class_name: 'ImageToPdf::Image',
    foreign_key: :image_to_pdf_document_id

  accepts_nested_attributes_for :image_to_pdf_images,
    reject_if: :all_blank, allow_destroy: true
end
