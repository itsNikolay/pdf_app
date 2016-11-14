require 'rails_helper'

RSpec.describe ImageToPdf::Image, type: :model do
  subject(:image_to_pdf_image) { build :image_to_pdf_image }
  it { is_expected.to be_valid }
end
