
class GameVariantValidator < ActiveModel::EachValidator

  def validate_each record, attribute, value
    unless Chessmonger.rulebook.config.variant value
      record.errors[attribute] << (options[:message] || "is not a known game variant")
    end
  end
end
