require 'rails_helper'

RSpec.describe ImageToPdf::Image, type: :model do
  subject(:image_to_pdf_image) { build :image_to_pdf_image }
  it { is_expected.to be_valid }

  describe '#attachment_data=' do
    let(:base64) { 'data:jpeg;base64,/9j/4AAQSkZJRgABAQEASABKdhH//2Q==' }
    let(:image_to_pdf_image) { build :image_to_pdf_image, attachment: nil }
    before { image_to_pdf_image.attachment_data = base64 }
    subject { image_to_pdf_image.attachment }

    it { is_expected.to be_a FileUploader }
  end
end
