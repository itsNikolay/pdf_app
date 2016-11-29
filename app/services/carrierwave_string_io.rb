class CarrierwaveStringIO < StringIO
  attr_accessor :filepath

  def initialize(filepath, *args)
    super(*args)
    @filepath = filepath
  end

  def original_filename
    File.basename(@filepath)
  end
end

