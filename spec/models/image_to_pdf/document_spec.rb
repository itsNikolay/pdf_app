require 'rails_helper'

RSpec.describe ImageToPdf::Document, type: :model do
  subject(:image_to_pdf_document) { build :image_to_pdf_document }
  it { is_expected.to be_valid }

  describe '#image_to_pdf_files' do
    let(:image_to_pdf_document) { create :image_to_pdf_document, :with_image_to_pdf_images }
    subject(:image_to_pdf_images) { image_to_pdf_document.image_to_pdf_images }

    describe '#first' do
      subject(:first) { image_to_pdf_images.first }

      describe '#image_to_pdf_document' do
        subject { first.image_to_pdf_document }
        it { is_expected.to eq image_to_pdf_document }
      end
    end
  end

  describe '.accepts_nested_attributes_for' do
    describe ':files' do
      let(:image_to_pdf_image) { attributes_for :image_to_pdf_image }
      let(:params) do
        {
          image_to_pdf_images_attributes: [ image_to_pdf_image ]
        }
      end
      subject { described_class.new(params) }
      it { is_expected.to be_valid }
    end
  end
end
