class ImmutableValidator < ActiveModel::EachValidator
  def validate_each record, attribute, value
    if record.send("#{attribute}_changed?") and record.changes()[attribute][0].present?
      record.errors[attribute] << (options[:message] || "cannot be changed after creation")
    end
  end
end
