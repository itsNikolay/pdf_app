class UploadedFile
  attr_reader :base64, :ext

  def initialize(**args)
    @base64 = args.fetch(:base64)
    @ext    = args.fetch(:ext)
  end

  def file
    @file ||= tempfile.tap do |f|
      f.binmode
      f.write(stream)
      f.close
    end
  end

  private

  def tempfile
    @tempfile ||= Tempfile.new(['file', ext])
  end

  def stream
    @stream ||= Base64.decode64(base64)
  end
end
