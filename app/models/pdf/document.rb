class Pdf::Document < ApplicationRecord
  # NOTE: :foreign_key required with AR module
  has_many :pdf_files, class_name: 'Pdf::File', foreign_key: :pdf_document_id

  accepts_nested_attributes_for :pdf_files,
    reject_if: :all_blank, allow_destroy: true
end
