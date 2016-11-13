FactoryGirl.define do
  factory :pdf_file, class: 'Pdf::File' do
    pdf_document
    file Rack::Test::UploadedFile.new(
      File.join("#{Rails.root}/spec/fixtures/images/sample.jpg")
    )
  end
end
