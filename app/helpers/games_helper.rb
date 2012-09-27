module GamesHelper

  def human_game_variant name
    I18n.t "rulebook.variants.#{name}"
  end
end
