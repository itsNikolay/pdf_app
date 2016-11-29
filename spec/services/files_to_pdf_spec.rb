RSpec.describe FilesToPdf do
  let(:files) do
    [
      File.open(fixture_path + '/images/sample.jpg'),
      File.open(fixture_path + '/images/sample.png'),
      File.open(fixture_path + '/images/sample.gif'),
    ]
  end

  subject(:instance) { described_class.new(files) }

  describe '#blob' do
    subject { instance.blob }

    it { is_expected.to be_a String }
  end
end
