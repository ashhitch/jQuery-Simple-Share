module.exports = {

      main: {
        options: {
          banner: '<%= banner %>'
        },
        src: '<%= package.dev %>/jquery.simple-share.js',
        dest: '<%= package.live %>/<%= package.name %>.min.js'
      }


};
