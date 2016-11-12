class FilesToPdf
  attr_reader :files, :path

  def initialize(files, path = '/tmp/sample.pdf')
    @files, @path = files, path
  end

  def write_file(path)
    image_list.write(path)
  end

  private

  def image_list
    @image_list ||= Magick::ImageList.new(*pathes)
  end

  def pathes
    @pathes ||= files.map(&:file).map(&:path)
  end
end
