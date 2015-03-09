module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },


    handlebars: {
      compile: {
          options: {
            namespace: 'JST'
          },
          files: {
              "js/templates.js": ["templatesfolder/*.handlebars"]
          }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss', 
        tasks: ['sass']
      },

      handlebars: {
        files: 'templatesfolder/*.handlebars',
        tasks: ['handlebars']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
 
  grunt.registerTask('default', ['handlebars']);
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}


