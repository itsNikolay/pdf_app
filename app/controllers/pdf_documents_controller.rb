class PdfDocumentsController < ApplicationController
  def index
    @pdf_document = Pdf::Document.new
  end
end
