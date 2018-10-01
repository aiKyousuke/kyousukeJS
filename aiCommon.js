javascript: (function(func, scr) {
    scr = document.createElement("script");
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
    scr.onload = function() {
        func(jQuery.noConflict(true))
    };
    document.body.appendChild(scr)
})(function($) {
    "use strict";
    
    $('body').css('margin', '0px');
    
    $('input[value="submit"]').attr('value', '話す');
    
});