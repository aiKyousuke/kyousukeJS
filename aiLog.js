javascript: (function(func, scr) {
    scr = document.createElement("script");
    scr.src = "//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
    scr.onload = function() {
        func(jQuery.noConflict(true))
    };
    document.body.appendChild(scr)
})(function($) {
    "use strict";
    
    const nextUInt = function() {
        let x = Math.floor(Math.random() * 1000000000);
        let y = Math.floor(Math.random() * 1000000000);
        let z = Math.floor(Math.random() * 1000000000);
        let w = Math.floor(Math.random() * 100000000);
        const t = x ^ x << 11;
        x = y;
        y = z;
        z = w;
        w = (w ^ w >>> 19) ^ (t ^ t >>> 8);
        
        const result = w >>> 0;
        return result / 4294967296;
    };
    
    Math.randomInt = function(max) {
        return Math.floor(max * nextUInt());
    };
    
    const tagDiv = 'body > div:eq(0) > div:eq(0) > div:eq(1)';
    const changeStyle = 'background-color:#ffffff;border:1px solid #ffffff;margin-top:5px;minx-width:300px;max-width:600px;padding:0px;'
    
    $(tagDiv).attr('style', changeStyle);
    
    const imgUrl = 'personal/user780/pic/';
    
    const imgList = ['lba2121.jpg', 'rngif1.gif', 'moa3.jpg'];
    
    const imgCount = imgList.length;
    const r = Math.randomInt(imgCount);
    
    const output = '<img src=' + imgUrl + imgList[r] + '>';
    $(tagDiv).append(output);
});