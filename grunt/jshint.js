module.exports = {
  options: {
    jshintrc: '<%= package.dev %>/.jshintrc'
  },
  grunt: {
    options: {
      jshintrc: '<%= package.dev %>/.jshintrc'
    },
    src: ['Gruntfile.js', 'grunt/*.js']
  },
  src: {
    src: ['<%= package.dev %>/*.js']
  }
};
