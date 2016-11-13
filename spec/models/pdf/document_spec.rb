require 'rails_helper'

RSpec.describe Pdf::Document, type: :model do
  subject(:pdf_document) { build :pdf_document }
  it { is_expected.to be_valid }

  describe '#files' do
    let(:pdf_document) { build :pdf_document, :with_pdf_files }
    subject { pdf_document.pdf_files }
    it { expect(subject.size).not_to be_zero }
  end
end
