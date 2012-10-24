#!/usr/bin/env rake
# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.
require 'paint'

require File.expand_path('../config/application', __FILE__)

Chessmonger::Application.load_tasks

require 'rake-version'
RakeVersion::Tasks.new do |v|
  v.copy 'package.json', 'spec/javascripts/version.spec.js'
end

namespace :spec do

  desc "Run the code examples in spec/javascripts"
  task :js do |t|

    ENV['RAILS_ENV'] = 'development'
    Rake::Task['assets:precompile'].invoke

    target = 'spec/javascripts/build/'

    unless system "cp public/assets/application.js #{target}"
      raise "Couldn't copy development assets to specs"
    end
    puts Paint["Copied compiled assets to #{target}", :green]

    unless system "rm -fr public/assets"
      raise "Couldn't delete compiled assets"
    end
    puts Paint["Deleted compiled assets", :green]

    system "grunt jasmine"
  end
end
