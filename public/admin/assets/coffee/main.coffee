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
    shim:
        'jquery.serialize': ['jquery']
        'jquery.tablesorter': ['jquery']
        'bootstrap.modal': ['jquery']
        'bootstrap.tab': ['jquery']
        'jquery.equalHeight': ['jquery']
        'jquery.ui': ['jquery']
        'jquery.twzipcode': ['jquery']
        'jquery.ui.core': ['jquery']
        'jquery.ui.datepicker': ['jquery.ui.core', 'jquery']
        'jquery.ui.timepicker': ['jquery.ui.datepicker']
        'libs/handlebars-helper': ['handlebars']
        'templates': ['handlebars']
    urlArgs: (new Date()).getTime()

require ['app'], (App) ->
    App.initialize()
