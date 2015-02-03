'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dev: {
                options: {
                    cssDir: ['css'],
                    sassDir: ['src/scss'],
                    sourcemap: true,
                }
            },
            build: {
                options: {
                    cssDir: ['<%= pkg.folders.app %>/css'],
                    sassDir: ['<%= pkg.folders.app %>/src/scss'],
                    quiet: true,
                    outputStyle: 'compressed',
                    noLineComments: true
                }
            }
        },
        watch: {
            compass: {
                files: ['src/**/*.scss'],
                tasks: ['compass:dev'],
                options: {
                    livereload: true,
                },
            }
        },
        connect: {
            livereload: true,
            server: {
                options: {
                    port: 3000,
                    hostname: '*',
                    base: ''
                }
            },
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                '*.js', 
            ]
        }
    });
    grunt.registerTask('build', [
        'compass:build',
    ]);
    grunt.registerTask('dev', [
        'jshint',
        'compass:dev',
        'connect:server',
        'connect:livereload',
        'watch',
    ]);
    grunt.registerTask('default', [
        'dev'
    ]);
};