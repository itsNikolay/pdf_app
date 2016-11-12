class Pdf::Document < ApplicationRecord
  has_many :files,
    class_name: 'Pdf::File',
    foreign_key: :pdf_document_id

  mount_uploader :pdf_file, PdfUploader
end
