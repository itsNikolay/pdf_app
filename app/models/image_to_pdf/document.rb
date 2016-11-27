class ImageToPdf::Document < ApplicationRecord
  self.table_name = :image_to_pdf_documents

  # NOTE: :foreign_key required with AR module
  has_many :image_to_pdf_images,
    -> { order(position: :asc) },
    class_name: 'ImageToPdf::Image',
    foreign_key: :image_to_pdf_document_id

  accepts_nested_attributes_for :image_to_pdf_images,
    reject_if: :all_blank, allow_destroy: true

  mount_uploader :attachment, PdfUploader

  def attachment_data=(base64)
    value = Base64ToString.new(base64).string
    self.attachment = value
  end

  def generate_attachment
    files = image_to_pdf_images.map(&:attachment)
    files_to_pdf = FilesToPdf.new(files).tap(&:write_file)
    self.attachment = File.open(files_to_pdf.path)
  end
end
