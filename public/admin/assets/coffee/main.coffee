# Filename: main.js
require.config
    paths:
        jquery: "../vendor/jquery/jquery"
        underscore: "../vendor/underscore-amd/underscore"
        backbone: "../vendor/backbone-amd/backbone"
        handlebars: "../vendor/handlebars/handlebars.runtime"
        templates: "../templates/template"
    shim:
        "../vendor/jquery-serialize-object/jquery.serialize-object": ["jquery"]
        "../vendor/jquery.tablesorter/js/jquery.tablesorter": ["jquery"]
        "libs/jquery/jquery-ui-1.8.18.custom.min": ["jquery"]
        "libs/jquery/bootstrap-modal": ["jquery"]
        "libs/jquery/swfobject": ["jquery"]
        "libs/jquery/jquery.uploadify.v2.1.4.min": ["jquery"]
        "libs/jquery/jquery.equalHeight": ["jquery"]
        "libs/twitter/bootstrap-tab": ["jquery"]
        "ckeditor/ckeditor.js": ["jquery"]
        "libs/hideshow.js": ["jquery"]
        "libs/handlebars-helper": ["handlebars"]
        "templates": ["handlebars"]
    urlArgs: (new Date()).getTime()

require ["app"], (App) ->
    App.initialize()
