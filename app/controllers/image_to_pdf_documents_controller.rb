class ImageToPdfDocumentsController < ApplicationController
  def index
    @document = ImageToPdf::Document.new
  end

  def create
    @document = ImageToPdf::Document.new(image_to_pdf_document_params)

    if @document.save
      render json: @document.as_json(include: :image_to_pdf_images), status: :created
    else
      render json: @document.errors.to_json, status: :unprocessable_entity
    end
  ensure
    unlink_files
  end

  def update
    @document = ImageToPdf::Document.find(params[:id])
    if @document.update(image_to_pdf_document_params)
      render json: @document.as_json(include: :image_to_pdf_images), status: :created
    else
      render json: @document.errors.to_json, status: :unprocessable_entity
    end
  end

  def show
    @document = ImageToPdf::Document.find(params[:id])

    respond_to do |format|
      format.pdf {
        path = '/tmp/sample.pdf'
        FilesToPdf.new(@document.image_to_pdf_images.map(&:attachment)).write_file(path)
        send_file path, type: 'application/pdf'
      }
    end
  end

  private

  def image_to_pdf_document_params
    {
      image_to_pdf_images_attributes: files.map { |f| { attachment: f } }
    }
  end

  def unlink_files
    files.each(&:unlink)
    @files = nil
  end

  def files
    @files ||= params[:images].map do |base64|
      Base64ToFile.new(base64).file
    end
  end
end
