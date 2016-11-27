class ImageToPdf::Image < ApplicationRecord
  self.table_name = :image_to_pdf_images

  belongs_to :image_to_pdf_document, class_name: 'ImageToPdf::Document',
   foreign_key: :image_to_pdf_document_id

  mount_uploader :attachment, FileUploader

  acts_as_list scope: :image_to_pdf_document

  def attachment_data=(base64)
    value = Base64ToString.new(base64).string
    self.attachment = value
  end
end
