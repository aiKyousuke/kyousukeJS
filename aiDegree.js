javascript: (function(func, scr) {
    scr = document.createElement("script");
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
    scr.onload = function() {
        func(jQuery.noConflict(true))
    };
    document.body.appendChild(scr)
})(function($) {
    "use strict";
    
    const dd = new Date();
    const year = dd.getFullYear();
    const oldYear = year - 1;
    
});