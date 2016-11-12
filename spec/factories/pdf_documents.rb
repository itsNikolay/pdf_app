FactoryGirl.define do
  factory :pdf_document, class: 'Pdf::Document' do

    trait :with_pdf_file do
      pdf_file Rack::Test::UploadedFile.new(
        File.join("#{Rails.root}/spec/fixtures/pdfs/sample.pdf")
      )
    end

    trait :with_files do
      files { create_list 3, :file }
    end
  end
end
