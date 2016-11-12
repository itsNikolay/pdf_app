RSpec.describe FileToBase64 do
  let(:path) { fixture_path + '/images/sample.jpg' }
  subject(:instance) { described_class.new(path) }

  describe '#base64' do
    subject { instance.base64 }
    it { is_expected.not_to be_nil }
  end
end
