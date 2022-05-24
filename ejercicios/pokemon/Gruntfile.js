module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist'],
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/*.js'],
                dest: 'dist/concat.js',
            },
        },
        less: {
            build: {
                files: {
                    'dist/style/build.css': 'src/*.less',
                },
            },
        },
        htmlbuild: {
            dist: {
                src: 'src/*.html',
                dest: 'dist/html',
                options: {
                    scripts: { main: 'dist/build.min.js' },
                },
            },
        },
        uglify: {
            build: {
                files: {
                    'dist/js/build.min.js': 'src/*.js',

                }
            }
        },
        watch: {
            tasks: ['clean','concat', 'uglify', 'less', 'htmlbuild'],
        },
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'less', 'htmlbuild']);
}