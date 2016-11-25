RSpec.describe Base64ToString do
  let(:data) { 'data:jpeg;base64,/9j/4AAQSkZJRgABAQEASABKdhH//2Q==' }
  subject(:instance) { described_class.new(data) }

  describe '#string' do
    subject { instance.string }
    it { is_expected.to respond_to(:original_filename) }
  end
end
