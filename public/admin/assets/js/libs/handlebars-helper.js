Handlebars.registerHelper('date_time', function(time) {
    return moment.unix(time).format('YYYY-MM-DD HH:mm:ss');
});