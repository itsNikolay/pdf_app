FactoryGirl.define do
  factory :pdf_file, class: 'Pdf::File' do
    file Rack::Test::UploadedFile.new(
      File.join("#{Rails.root}/spec/fixtures/images/sample.jpg")
    )
    pdf_document
  end
end
