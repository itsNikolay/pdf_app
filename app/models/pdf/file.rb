class Pdf::File < ApplicationRecord
  belongs_to :document,
    class_name: 'Pdf::Document',
    foreign_key: :pdf_document_id,
    required: true

  mount_uploader :file, FileUploader
end
