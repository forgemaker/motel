Handlebars.registerHelper('date_time', function(time) {
    return (time) ? moment.unix(time).format('YYYY-MM-DD HH:mm:ss') : '';
});