FactoryGirl.define do
  factory :image_to_pdf_image, class: 'ImageToPdf::Image' do
    image_to_pdf_document
    attachment Rack::Test::UploadedFile.new(
      File.join("#{Rails.root}/spec/fixtures/images/sample.jpg")
    )
  end
end
