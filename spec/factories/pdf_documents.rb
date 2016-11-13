FactoryGirl.define do
  factory :pdf_document, class: 'Pdf::Document' do
    trait :with_pdf_files do
      pdf_files { create_list(:pdf_file, 1) }
    end
  end
end
