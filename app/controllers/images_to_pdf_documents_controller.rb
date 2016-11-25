class ImagesToPdfDocumentsController < ApplicationController

  def index
    @document = ImageToPdf::Document.new
  end

  def create
    @document = ImageToPdf::Document.new(permitted_params)

    if @document.save
      render json: @document.as_json(include: :image_to_pdf_images), status: :created
    else
      render json: @document.errors.to_json, status: :unprocessable_entity
    end
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
        send_file @document.generate_attachment.path, type: 'application/pdf'
      }
    end
  end

  private

  def permitted_params
    params.require(:image_to_pdf_document)
      .permit(image_to_pdf_images_attributes: [:attachment_data])
  end
end
