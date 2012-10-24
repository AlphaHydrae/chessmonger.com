/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-jasmine-runner');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      version: '<%= pkg.version %>'
    },

    jasmine : {
      src : [
        'spec/javascripts/build/application.js'
      ],
      helpers : 'spec/javascripts/helpers/*.js',
      specs : 'spec/javascripts/**/*.spec.js'
    },

    'jasmine-server' : {
      browser : false
    }
  });

  // Default task.
  grunt.registerTask('default', 'jasmine');
};
