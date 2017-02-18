module.exports = function(grunt) {

	grunt.initConfig({
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
	  

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['watch']);
};