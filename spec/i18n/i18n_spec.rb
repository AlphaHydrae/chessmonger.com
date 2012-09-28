
describe 'Internationalization' do

  it "should have translations for all game variants" do
    I18n.available_locales.each do |locale|
      Chessmonger.rulebook.config.variant_names.each do |name|
        "chessmonger.variants.#{name}".should be_translated_in(locale)
      end
    end
  end
end
