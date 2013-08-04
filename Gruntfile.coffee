module.exports = (grunt) ->
    random_string = (string_length) ->
        string_chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
        randomstring = ''
        i = 0
        while i < string_length
            rnum = Math.floor(Math.random() * string_chars.length)
            randomstring += string_chars.substring(rnum,rnum + 1)
            i++
        return randomstring
    # build time
    filetime = random_string(32)
    # Project configuration
    project_config =
        app: 'public'
        test: 'test'
        dist: 'dist/public'
        release: 'dist'
        build: 'build'
    grunt.initConfig
        pkg: project_config
        bower:
            install:
                options:
                    cleanup: false
                    install: true
                    verbose: true
                    copy: false
            cleanup:
                options:
                    cleanup: true
                    verbose: true
                    install: false
                    copy: false
        livereload:
            port: 35729
        regarde:
            html:
                files: ['<%= pkg.app %>/assets/**/*.{html,htm}']
                tasks: ['livereload']
                events: true
            scss:
                files: ['<%= pkg.app %>/assets/**/*.scss'],
                tasks: ['compass:dev']
                events: true
            css:
                files: ['<%= pkg.app %>/assets/**/*.css'],
                tasks: ['livereload']
                events: true
            js:
                files: '<%= pkg.app %>/assets/**/*.js',
                tasks: ['livereload']
                events: true
            coffee:
                files: '<%= pkg.app %>/assets/**/*.coffee',
                tasks: ['coffee']
                events: true
            grunt:
                files: 'Gruntfile.coffee',
                tasks: ['coffee']
                events: true
            php:
                files: ['**/*.php'],
                tasks: ['livereload']
                events: true
            handlebars:
                files: '<%= pkg.app %>/**/*.handlebars',
                tasks: ['handlebars', 'livereload']
                events: true
        compass:
            dev:
                options:
                    ###
                    Load config from config.rb file
                    basePath: 'assets'
                    config: 'config.rb'
                    ###
                    sassDir: '<%= pkg.app %>/assets/sass'
                    cssDir: '<%= pkg.app %>/assets/css'
                    imagesDir: '<%= pkg.app %>/assets/images'
                    javascriptsDir: '<%= pkg.app %>/assets/js'
                    outputStyle: 'nested'
                    relativeAssets: true
                    noLineComments: true
                    environment: 'development'
        coffee:
            dev:
                expand: true,
                cwd: '<%= pkg.app %>/assets/coffee/',
                src: ['**/*.coffee'],
                dest: '<%= pkg.app %>/assets/js/',
                ext: '.js'
                options:
                    bare: true
            grunt:
                files:
                    'Gruntfile.js': 'Gruntfile.coffee'
                options:
                    bare: true
        requirejs:
            build:
                options:
                    baseUrl: '<%= pkg.app %>/assets/js/'
                    name: 'main'
                    out: '<%= pkg.app %>/assets/js/main-built.js'
                    mainConfigFile: '<%= pkg.app %>/assets/js/main.js'
                    preserveLicenseComments: false
                    paths:
                        jquery: '../vendor/jquery/jquery'
            release:
                options:
                    ###
                    support generate Source Maps, make sure requirejs version in 2.1.2
                    optimize: 'uglify2'
                    generateSourceMaps: true
                    ###
                    appDir: "<%= pkg.app %>/"
                    baseUrl: "assets/js/"
                    dir: "<%= pkg.dist %>"
                    name: "main"
                    mainConfigFile: '<%= pkg.app %>/assets/js/main.js'
                    preserveLicenseComments: false
                    fileExclusionRegExp: /^(\.|node_modules)/
                    paths:
                        jquery: '../vendor/jquery/jquery'
                        underscore: '../vendor/underscore-amd/underscore'
                        backbone: '../vendor/backbone-amd/backbone'
                        handlebars: '../vendor/handlebars/handlebars.runtime'
                        modernizr: '../vendor/modernizr/modernizr'
                        templates: '../templates/template'
                        scrollup: '../vendor/scrollup/js/jquery.scrollUp.min'
        handlebars:
            options:
                namespace: 'Handlebars.templates'
                processName: (filename) ->
                    filename.replace(/.*\/(.*)\.handlebars$/i, '$1')
            compile:
                files:
                    '<%= pkg.app %>/assets/templates/template.js': ['<%= pkg.app %>/assets/templates/*.handlebars']
        cssmin:
            release:
                report: 'gzip'
                expand: true
                cwd: '<%= pkg.dist %>/assets/css'
                src: ['*.css']
                dest: '<%= pkg.dist %>/assets/css'
        clean:
            options:
                force: true
            js: '<%= pkg.dist %>/assets/js'
            release: [
                '<%= pkg.dist %>/build.txt'
                '<%= pkg.dist %>/assets/coffee'
                '<%= pkg.dist %>/assets/sass'
                '<%= pkg.dist %>/assets/vendor'
                '<%= pkg.dist %>/.sass-cache'
            ]
            cleanup: [
                '<%= pkg.dist %>'
                '<%= pkg.app %>/assets/vendor'
                '<%= pkg.app %>/assets/js/main-built.js'
                '<%= pkg.app %>/assets/js/main-built.js.map'
                '<%= pkg.app %>/assets/js/main-built.js.src'
                'node_modules'
                '.sass-cache'
            ]
            dist: [
                '<%= pkg.release %>'
            ]
        copy:
            release:
                files: [
                    {
                        expand: true
                        cwd: '<%= pkg.dist %>/assets/css'
                        src: ['**/*.css']
                        dest: '<%= pkg.dist %>/assets/css/'
                        rename: (dest, src) ->
                            dest + src.replace('.css', '') + '.' + filetime + '.css'
                    }
                    {src: '<%= pkg.app %>/.htaccess', dest: '<%= pkg.dist %>/.htaccess'}
                    {src: '<%= pkg.dist %>/assets/vendor/requirejs/require.js', dest: '<%= pkg.dist %>/assets/js/require.js'}
                    {src: '<%= pkg.app %>/assets/js/main-built.js', dest: '<%= pkg.dist %>/assets/js/main.' + filetime + '.js'}
                    {expand: true, src: ['system/**'], dest: '<%= pkg.release %>/'}
                    {expand: true, src: ['application/**'], dest: '<%= pkg.release %>/'}
                    {expand: true, src: ['sparks/**'], dest: '<%= pkg.release %>/'}
                ]

        replace:
            release:
                src: '<%= pkg.release %>/application/views/template/layout.php'
                dest: '<%= pkg.release %>/application/views/template/layout.php'
                replacements: [
                    {
                        from: '.css'
                        to: '.' + filetime + '.css'
                    },
                    {
                        from: 'js/main'
                        to: 'js/main.' + filetime
                    },
                    {
                        from: 'vendor/requirejs/'
                        to: 'js/'
                    }
                ]
            main:
                src: '<%= pkg.dist %>/index.php'
                dest: '<%= pkg.dist %>/index.php'
                replacements: [
                    {
                        from: 'define(\'ENVIRONMENT\', \'development\');'
                        to: 'define(\'ENVIRONMENT\', \'production\');'
                    }
                ]

    grunt.event.on 'watch', (action, filepath) ->
        grunt.log.writeln filepath + ' has ' + action

    grunt.event.on 'regarde:file', (status, name, filepath, tasks, spawn) ->
        grunt.log.writeln 'File ' + filepath + ' ' + status + '. Tasks: ' + tasks

    grunt.registerTask 'init', () ->
        grunt.log.writeln 'Initial project'
        (grunt.file.exists '<%= pkg.app %>/assets/vendor') || grunt.task.run 'bower:install'

    # run local server by grunt-contrib-connect plugin
    grunt.registerTask 'default', ['init', 'livereload-start', 'regarde']
    grunt.registerTask 'cleanup', ['clean:cleanup']
    grunt.registerTask 'release', () ->
        grunt.log.writeln 'deploy project'
        grunt.task.run 'clean:dist'
        (grunt.file.exists project_config.app + '/assets/vendor') || grunt.task.run 'bower:install'
        grunt.task.run ['requirejs:build', 'requirejs:release', 'cssmin:release', 'clean:js']
        grunt.file.mkdir project_config.dist + '/assets/js'
        grunt.task.run 'copy:release'
        grunt.task.run ['replace:release', 'replace:main']
        grunt.task.run 'clean:release'

    # Dependencies
    grunt.loadNpmTasks 'grunt-shell'
    grunt.loadNpmTasks 'grunt-regarde'
    grunt.loadNpmTasks 'grunt-contrib-connect'
    grunt.loadNpmTasks 'grunt-contrib-livereload'
    grunt.loadNpmTasks 'grunt-contrib-compass'
    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-contrib-copy'
    grunt.loadNpmTasks 'grunt-contrib-clean'
    grunt.loadNpmTasks 'grunt-text-replace'
    grunt.loadNpmTasks 'grunt-contrib-htmlmin'
    grunt.loadNpmTasks 'grunt-requirejs'
    grunt.loadNpmTasks 'grunt-bower-task'
    grunt.loadNpmTasks 'grunt-contrib-cssmin'
    grunt.loadNpmTasks 'grunt-express-server'
    grunt.loadNpmTasks 'grunt-mocha-phantomjs'
    grunt.loadNpmTasks 'grunt-contrib-handlebars'
