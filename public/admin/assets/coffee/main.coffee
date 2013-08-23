# Filename: main.js
require.config
    paths:
        jquery: '../vendor/jquery/jquery'
        underscore: '../vendor/underscore-amd/underscore'
        backbone: '../vendor/backbone-amd/backbone'
        handlebars: '../vendor/handlebars/handlebars.runtime'
        templates: '../templates/template'
        moment: '../vendor/moment/moment'
        alertify: '../vendor/alertify/alertify'
        'jquery.serialize': '../vendor/jquery-serialize-object/jquery.serialize-object'
        'jquery.tablesorter': '../vendor/jquery.tablesorter/js/jquery.tablesorter'
        'jquery.equalHeight': 'libs/jquery/jquery.equalHeight'
        'bootstrap.modal': '../vendor/bootstrap/js/modal'
        'bootstrap.tab': '../vendor/bootstrap/js/tab'
        'jquery.ui.core': '../vendor/jquery-ui/ui/jquery.ui.core'
        'jquery.ui.datepicker': '../vendor/jquery-ui/ui/jquery.ui.datepicker'
        'jquery.twzipcode': 'libs/jquery/jquery.twzipcode-1.5.2'
        'jquery.ui.timepicker': '../vendor/jquery-timepicker-addon/jquery-ui-timepicker-addon'
        # upload plugin
        'jquery.ui.widget': '../vendor/blueimp-file-upload/js/vendor/jquery.ui.widget'
        'jquery.iframe-transport': '../vendor/blueimp-file-upload/js/jquery.iframe-transport'
        'jquery.fileupload': '../vendor/blueimp-file-upload/js/jquery.fileupload'
        'jquery.fileupload-validate': '../vendor/blueimp-file-upload/js/jquery.fileupload-validate'
        'jquery.fileupload-process': '../vendor/blueimp-file-upload/js/jquery.fileupload-process'
    shim:
        'jquery.serialize':
            deps: ['jquery']
        'jquery.tablesorter':
            deps: ['jquery']
        'bootstrap.modal':
            deps: ['jquery']
        'bootstrap.tab':
            deps: ['jquery']
        'jquery.equalHeight':
            deps: ['jquery']
        'jquery.ui':
            deps: ['jquery']
        'jquery.twzipcode':
            deps: ['jquery']
        'jquery.ui.core':
            deps: ['jquery']
        'jquery.ui.datepicker':
            deps: ['jquery.ui.core', 'jquery']
        'jquery.ui.timepicker':
            deps: ['jquery.ui.datepicker']
        'jquery.ui.widget':
            deps: ['jquery']
        'jquery.iframe-transport':
            deps: ['jquery']
        'jquery.fileupload':
            deps: ['jquery']
        'jquery.fileupload-validate':
            deps: ['jquery']
        'jquery.fileupload-process':
            deps: ['jquery']
        'libs/handlebars-helper': ['handlebars']
        'templates': ['handlebars']
    urlArgs: (new Date()).getTime()

require ['app'], (App) ->
    App.initialize()
