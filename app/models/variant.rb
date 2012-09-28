
class Variant
  attr_reader :name

  def self.all
    @variants ||= Chessmonger.rulebook.config.variant_names.collect do |name|
      Variant.new :name => name
    end
  end

  def self.get name
    self.all.find{ |v| v.name == name }
  end

  def initialize attrs = {}
    @name = attrs[:name]
  end

  def human_name
    I18n.t("chessmonger.variants.#{name}")
  end
end
