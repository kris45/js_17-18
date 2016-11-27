module.exports = function(grunt) {

   grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        src: ['src/js/*.js'],
        dest: 'dist/js/script.js'
      },
      css: {
        src: ['src/css/*.css'],
        dest: 'dist/css/style.css'
      }
    },
    uglify: {
      js: {
        src: ['dist/js/script.js'],
        dest: 'dist/js/script.min.js'
      },
      css: {
        src: ['dist/css/style.css'],
        dest: 'dist/css/style.min.css'
      }
    }
  });  

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['concat', 'uglify']);

};