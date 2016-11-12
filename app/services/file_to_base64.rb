class FileToBase64
  attr_reader :path

  def initialize(path)
    @path = path
  end

  def base64
    @base64 ||= Base64.encode64(stream)
  end

  private

  def stream
    @stream ||= File.open(path, 'r').read
  end
end
