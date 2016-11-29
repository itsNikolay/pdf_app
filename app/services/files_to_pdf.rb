class FilesToPdf
  attr_reader :files

  def initialize(files, *args)
    @files  = files
  end

  def blob
    image_list.to_blob { self.format = 'pdf' }
  end

  private

  def image_list
    @image_list ||= Magick::ImageList.new(*pathes)
  end

  def pathes
    @pathes ||= files.map(&:path)
  end
end
