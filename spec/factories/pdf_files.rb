FactoryGirl.define do
  factory :pdf_file, class: 'Pdf::File' do
    file Rack::Test::UploadedFile.new(
      File.join("#{Rails.root}/spec/fixtures/images/sample.jpg")
    )
    document { create :pdf_document }
  end
end
