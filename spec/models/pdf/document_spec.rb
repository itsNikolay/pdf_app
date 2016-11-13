require 'rails_helper'

RSpec.describe Pdf::Document, type: :model do
  subject(:pdf_document) { build :pdf_document }
  it { is_expected.to be_valid }

  describe '#pdf_files' do
    let(:pdf_document) { create :pdf_document, :with_pdf_files }
    subject(:pdf_files) { pdf_document.pdf_files }

    describe '#first' do
      subject(:first) { pdf_files.first }

      describe '#pdf_document' do
        subject { first.pdf_document }
        it { is_expected.to eq pdf_document }
      end
    end
  end

  describe '.accepts_nested_attributes_for' do
    describe ':files' do
      let(:pdf_file) { attributes_for :pdf_file }
      let(:params) do
        {
          pdf_files_attributes: [ pdf_file ]
        }
      end
      subject { described_class.new(params) }
      it { is_expected.to be_valid }
    end
  end
end
