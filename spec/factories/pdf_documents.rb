FactoryGirl.define do
  factory :pdf_document, class: 'Pdf::Document' do

    trait :with_pdf_file do
      pdf_file Rack::Test::UploadedFile.new(
        File.join("#{Rails.root}/spec/fixtures/pdfs/sample.pdf")
      )
    end

    trait :with_pdf_files do
      pdf_files { [create(:pdf_file)] }
    end
  end
end
