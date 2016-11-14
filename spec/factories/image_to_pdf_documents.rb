FactoryGirl.define do
  factory :image_to_pdf_document, class: 'ImageToPdf::Document' do
    trait :with_image_to_pdf_images do
      image_to_pdf_images { create_list(:image_to_pdf_image, 1) }
    end
  end
end
