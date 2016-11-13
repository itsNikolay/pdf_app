class Pdf::File < ApplicationRecord
  belongs_to :pdf_document, class_name: 'Pdf::Document',
    foreign_key: :pdf_document_id

  mount_uploader :file, FileUploader
end
