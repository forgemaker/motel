// make sure the $ is pointing to JQuery and not some other library
(function($){
    // add a new method to JQuery

    jQuery.fn.equalHeight = function() {
       // find the tallest height in the collection
       // that was passed in (.column)
        tallest = 0;
        this.each(function(){
            thisHeight = $(this).height();
            windowHeight = $(window).height();
            if( windowHeight > thisHeight)
                tallest = windowHeight - $(this).offset().top;
            else
                tallest = thisHeight - $(this).offset().top;
        });

        // set each items height to use the tallest value found
        this.each(function(){
            $(this).height(tallest);
        });
    }
})(jQuery);
