 module.exports = {
  js: {
    files: ['<%= package.dev %>/*.js'],
    tasks: ['jshint', 'uglify','notify:watchjs']
  }
};
