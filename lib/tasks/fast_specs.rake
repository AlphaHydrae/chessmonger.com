require 'rspec/core/rake_task'

desc "Run all specs in spec directory (excluding automated)"
RSpec::Core::RakeTask.new('spec:fast') do |t|
  t.pattern = 'spec/**/*_spec.rb'
  t.spec_opts = ['--tag ~type:request']
end
