module Base64Attribute
  def data=(base64)
    @data = base64
  end

  private

  def split
    @split ||= @data.split(',')
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
