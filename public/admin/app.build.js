({
    baseUrl: "assets/javascript/",
    name: "main",
    out: "assets/javascript/main-built.js",
    mainConfigFile: "assets/javascript/main.js",
    preserveLicenseComments: false,
    paths: {
        jquery: "../vendor/jquery/jquery",
        underscore: "../vendor/underscore-amd/underscore",
        backbone: "../vendor/backbone-amd/backbone",
        handlebars: "../vendor/handlebars/handlebars.runtime",
        templates: "../templates/template"
    }
})
