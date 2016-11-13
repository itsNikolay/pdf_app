RSpec.describe FilesToPdf do
  let(:files) do
    [
      File.open(fixture_path + '/images/sample.jpg'),
      File.open(fixture_path + '/images/sample.png'),
      File.open(fixture_path + '/images/sample.gif'),
    ]
  end

  subject(:instance) { described_class.new(files) }

  describe '#write_file' do
    let(:path) { Rails.root + '/tmp/sample.pdf' }
    after { FileUtils.rm(path) if File.exist?(path) }
    subject { instance.write_file(path) }

    it { expect { subject }.to change(path, :file?) }
  end
end
