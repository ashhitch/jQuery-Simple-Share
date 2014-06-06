module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  var fs = require('fs');
  var path = require('path');

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    package: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * <%= package.name %> v<%= package.version %> (<%= package.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= package.author %>\n' +
            ' * Last Build <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n' +
            ' */  \n\n',
    jqueryCheck: 'if (typeof jQuery === \'undefined\') { throw new Error(\'The Project\\\'s JavaScript requires jQuery\') }\n\n',
  });

  //Load task config from grunt folder
  require('load-grunt-config')(grunt);

  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  require('time-grunt')(grunt);


  grunt.registerTask('dist-js', ['jshint','uglify']);


  // Full distribution task.
  grunt.registerTask('dist', ['clean',  'dist-js' ,'notify:builddone']);
  // Default task.
  grunt.registerTask('default', ['dist']);

  grunt.registerTask('cleanme', ['clean']);



};
