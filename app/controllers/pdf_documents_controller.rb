class PdfDocumentsController < ApplicationController
  def index
    @pdf_document = Pdf::Document.new
  end

  def create
    @pdf_document = Pdf::Document.new(pdf_document_params)

    if @pdf_document.save
      render json: @pdf_document.as_json(include: :pdf_files), status: :created
    else
      render json: @pdf_document.errors.to_json, status: :unprocessable_entity
    end
  ensure
    unlink_files
  end

  def update
    @pdf_document = Pdf::Document.find(params[:id])
    if @pdf_document.update(pdf_document_params)
      render json: @pdf_document.as_json(include: :pdf_files), status: :created
    else
      render json: @pdf_document.errors.to_json, status: :unprocessable_entity
    end
  end

  private

  def pdf_document_params
    {
      pdf_files_attributes: files.map { |f| { file: f } }
    }
  end

  def unlink_files
    files.each(&:unlink)
  end

  def files
    @files ||= params[:files].map do |base64|
      Base64ToFile.new(base64).file
    end
  end
end
