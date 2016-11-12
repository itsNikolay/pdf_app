RSpec.describe UploadedFile do
  let(:path) { fixture_path + '/images/sample.jpg' }
  let(:base64) { FileToBase64.new(path).base64 }
  let(:ext) { '.jpg' }
  let(:args) do
    {
      base64: base64,
      ext: ext
    }
  end
  subject(:instance) { described_class.new(args) }

  describe '#file' do
    subject(:file) { instance.file }
    after { instance.file.unlink }
    it { is_expected.to be_a Tempfile }

    describe '#size' do
      subject { file.size }
      it {  is_expected.to be > 0 }
    end
  end
end
