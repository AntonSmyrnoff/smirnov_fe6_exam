module.exports = function(grunt) {

  grunt.initConfig({
    /*concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.min.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/dist/script.min.js'],
        dest: 'js/dist/script.min.js'
      }
    },*/
    concat_css: {
      options: {},
      all: {
        src: ["css/src/*.css"],
        dest: "css/style.css"
      },
    },
    /*cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/dist/style.min.css': ['css/dist/style.min.css']
        }
      }
    },*/
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['scss/*.scss'],
        tasks: ['sass'],
      },
    }
  });

/*  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');*/
  grunt.loadNpmTasks('grunt-concat-css');
/*  grunt.loadNpmTasks('grunt-contrib-cssmin');*/
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', [/*'concat', 'uglify', */ /*'cssmin',*/ 'watch']);

};