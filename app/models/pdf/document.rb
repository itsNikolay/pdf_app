class Pdf::Document < ApplicationRecord
  has_many :pdf_files, class_name: 'Pdf::File',
    foreign_key: :pdf_document_id

  mount_uploader :pdf_file, PdfUploader

  accepts_nested_attributes_for :pdf_files,
    reject_if: :all_blank, allow_destroy: true
end
