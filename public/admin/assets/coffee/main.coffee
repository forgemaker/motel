# Filename: main.js
require.config
    paths:
        jquery: '../vendor/jquery/jquery'
        underscore: '../vendor/underscore-amd/underscore'
        backbone: '../vendor/backbone-amd/backbone'
        handlebars: '../vendor/handlebars/handlebars.runtime'
        templates: '../templates/template'
        'jquery.serialize': '../vendor/jquery-serialize-object/jquery.serialize-object'
        'jquery.tablesorter': '../vendor/jquery.tablesorter/js/jquery.tablesorter'
        'jquery.equalHeight': 'libs/jquery/jquery.equalHeight'
        'bootstrap.modal': '../vendor/bootstrap/js/modal'
        'bootstrap.tab': '../vendor/bootstrap/js/tab'
        'jquery.ui': 'libs/jquery/jquery-ui-1.8.18.custom.min'
        'moment': '../vendor/moment/moment'
    shim:
        'jquery.serialize': ['jquery']
        'jquery.tablesorter': ['jquery']
        'bootstrap.modal': ['jquery']
        'bootstrap.tab': ['jquery']
        'jquery.equalHeight': ['jquery']
        'jquery.ui': ['jquery']
        'ckeditor/ckeditor.js': ['jquery']
        'libs/handlebars-helper': ['handlebars']
        'templates': ['handlebars']
    urlArgs: (new Date()).getTime()

require ['app'], (App) ->
    App.initialize()
