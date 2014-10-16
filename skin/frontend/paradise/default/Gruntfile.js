module.exports = function(grunt) {

  // 1. Вся настройка находится здесь
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'js/lib/*.js', // Все JS в папке libs
          'js/*.js' // Все JS в папке libs
        ],
        dest: 'js/build/production.js',
      }
    },
    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build/'
        }]
      }
    }
    // sass: {
    //   dist: {
    //     options: {
    //         style: 'compressed'
    //     },
    //     files: {
    //         'css/build/styles.css': 'scss/styles.scss'
    //     }
    //   }
    // }
    // watch: {
    //   scripts: {
    //     files: ['js/*.js'],
    //     tasks: ['concat', 'uglify'],
    //     options: {
    //       spawn: false,
    //     },
    //   },
    //   css: {
    //     files: ['scss/*.scss'],
    //     tasks: ['sass'],
    //     options: {
    //       spawn: false,
    //     }
    //   }
    // }

  });

  // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-compass');  

  // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
  grunt.registerTask('default', ['concat', 'uglify','imagemin']);

};