Handlebars.registerHelper('date_time', function(time) {
    return (time) ? moment.unix(time).format('YYYY-MM-DD HH:mm:ss') : '';
});

Handlebars.registerHelper('select', function(value, options) {
    var $el = $('<select />').html( options.fn(this) );
    $el.find('[value="' + value + '"]').attr({'selected':'selected'});
    return $el.html();
});