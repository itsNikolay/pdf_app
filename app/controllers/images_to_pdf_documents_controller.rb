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
    if @document.update(permitted_params)
      render json: @document.as_json(include: :image_to_pdf_images), status: :created
    else
      render json: @document.errors.to_json, status: :unprocessable_entity
    end
  end

  def show
    @document = ImageToPdf::Document.find(params[:id])

    respond_to do |format|
      format.json {
        render json: @document.as_json(include: :image_to_pdf_images)
      }
      format.pdf {
        @document.generate_attachment
        @document.save!
        send_file @document.attachment.path, type: 'application/pdf'
      }
    end
  end

  private

  def permitted_params
    params.require(:images_to_pdf_document).permit(
      :id,
      image_to_pdf_images_attributes: [
        :attachment_data, :position,
        :id, :image_to_pdf_document_id, attachment: [:id, :url]
      ]
    )
  end
end
