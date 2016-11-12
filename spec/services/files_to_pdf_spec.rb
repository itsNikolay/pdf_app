RSpec.describe FilesToPdf do
  let(:files) do
    [
      UploadedFile.new(
        base64: FileToBase64.new(
          fixture_path + '/images/sample.jpg'
        ).base64,
        ext: '.jpg'
      ),
      UploadedFile.new(
        base64: FileToBase64.new(
          fixture_path + '/images/sample.png'
        ).base64,
        ext: '.png'
      ),
      UploadedFile.new(
        base64: FileToBase64.new(
          fixture_path + '/images/sample.gif'
        ).base64,
        ext: '.gif'
      ),
    ]
  end

  after { files.map(&:file).map(&:unlink) }

  subject(:instance) { described_class.new(files) }

  describe '#write_file' do
    let(:path) { Rails.root + '/tmp/sample.pdf' }
    after { FileUtils.rm(path) if File.exist?(path) }
    subject { instance.write_file(path) }

    it { expect { subject }.to change(path, :file?) }
  end
end
