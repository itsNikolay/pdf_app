require 'rails_helper'

RSpec.describe Pdf::Document, type: :model do
  subject(:pdf_document) { build :pdf_document }
  it { is_expected.to be_valid }
end
