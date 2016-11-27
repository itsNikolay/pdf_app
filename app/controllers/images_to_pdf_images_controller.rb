class ImagesToPdfImagesController < ApplicationController
  [:move_lower, :move_higher, :destroy].each do |method|
    define_method method do
      if image.public_send(method)
        render json: document.as_json(include: :image_to_pdf_images), status: :created
      else
        render json: image.errors.to_json, status: :unprocessable_entity
      end
    end
  end

  private

  def image
    @image ||= ImageToPdf::Image.find_by!({
      image_to_pdf_document_id: params[:images_to_pdf_document_id],
      id: params[:id]
    })
  end

  def document
    @document ||= ImageToPdf::Document.find(params[:images_to_pdf_document_id])
  end

  def image_params
    params.require(:images_to_pdf_image).permit(:position)
  end
end
