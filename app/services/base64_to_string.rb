class Base64ToString
  attr_reader :base64

  def initialize(base64, filepath = 'foobar.jpg')
    @base64 = base64
    @filepath = filepath
  end

  def string
    @string ||= CarrierwaveStringIO.new(@filepath, content)
  end

  private

  def split
    @split ||= base64.split(',')
  end

  def content_type
    @content_type ||= split.first.match(/\:(.*)\;/i).captures.first
  end

  def ext
    @ext ||= Mime::Type.lookup(content_type).to_sym
  end

  def content
    @content ||= Base64.decode64(split.last)
  end
end
