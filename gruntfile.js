module.exports = function(grunt) {

	grunt.initConfig({
	  sass: {
	    dist: {
	      files: [{
	        expand: true,
	        cwd: 'scss',
	        src: ['*.scss'],
	        dest: 'css/src',
	        ext: '.css'
	      }]
	    }
	  },
	  
	  watch: {
        sass: {
          files: ['scss/*.scss'],
          tasks: ['sass', 'cssmin'],
        },

        uglify: {
          files: ['js/src/script.js'],
          tasks: ['uglify'],	
        },

        /*cssmin: {
          files: ['scss/*.scss'],
          tasks: ['cssmin'],	
        },*/
    },

    uglify: {
    	dist: {
        src: ['js/src/script.js'],
        dest: 'js/script.min.js'
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/style.min.css': ['css/src/style.css']
        }
      }
    }
});
	  

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  grunt.registerTask('default', ['watch']);
};