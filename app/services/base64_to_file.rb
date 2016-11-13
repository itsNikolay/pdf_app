class Base64ToFile
  attr_reader :base64

  def initialize(base64)
    @base64 = base64
  end

  def file
    @tempfile ||= Tempfile.new(['foo', ".#{ext}"]).tap do |f|
      f.binmode
      f.write(content)
      f.close
    end
  end

  private

  def split
    @split ||= base64.split(',')
  end

  def content_type
    @content_type ||= split.first.match(/\:(.*)\;/i)
  end

  def ext
    @ext ||= Mime::Type.lookup('image/jpeg').to_sym
  end

  def content
    @content ||= Base64.decode64(split.last)
  end
end
