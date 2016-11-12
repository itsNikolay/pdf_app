require 'rails_helper'

RSpec.describe Pdf::File, type: :model do
  subject(:pdf_file) { build :pdf_file }
  it { is_expected.to be_valid }
end
