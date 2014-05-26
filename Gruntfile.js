'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

          // Before generating any new files, remove any previously-created files.
        clean: {
            dist: [
                'assets/scripts/all.js',
                'assets/styles/all.css',
                'assets/dist/**/*.js',
                'assets/dist/**/*.css',
            ]
        },

        // Task configuration.
        concat: {
            options: {
                stripBanners: true
            },
            scripts: {
                src: [
                  'bower_components/jquery/dist/jquery.min.js',
                  'bower_components/bootstrap/dist/js/bootstrap.min.js',
                  'assets/scripts/**/*.js'],
                dest: 'assets/scripts/all.js'
            },
            styles: {
                src: [
                  'bower_components/bootstrap/dist/css/bootstrap.min.css',
                  'assets/styles/**/*.css'],
                dest: 'assets/styles/all.css'
            }
        },

        uglify: {
            options: {
                preserveComments: false
            },
            scripts: {
                src: '<%= concat.scripts.dest %>',
                dest: 'assets/dist/default.min.js'
            }
          },

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            assets: {
                src: ['assets/scripts/**/*.js']
            },
        },

        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib: {
                files: '<%= jshint.lib.src %>',
                tasks: ['jshint:lib', 'nodeunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'nodeunit']
            },
        },

        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            strict: {
                options: {
                    import: 2
                },
                src: ['assets/**/*.css']
            },
            lax: {
                options: {
                  import: false
                },
                src: ['assets/**/*.css']
            }
          },

          cssmin: {
            add_banner: {
                options: {
                    banner: ''
                },
                files: {
                    'assets/dist/default.min.css': ['assets/styles/**/*.css']
                }
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib');

    // Default task.
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin']);
};