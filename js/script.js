


//DYNAMIC NAVBAR FUNCTIONALITY//
$( document ).ready(function() {
    $(window).scroll(function() {
    var scrollval = $(this).scrollTop();
        
    if (scrollval > 737) {
        var nav = $(".nav");
        nav.removeClass("nav");
        nav.addClass("nav_fixed");
        /**rgba(52, 123, 31, 1)**/
        
        var rgba1 = 255 - (0.8 * ((scrollval-737)))
        var rgba2 = 255 - (0.5 * ((scrollval-737)))
        var rgba3 = 255 - (0.8 * ((scrollval-737)))
        
        if (rgba1 < 52) {
            rgba1 = 52;
        };
        
        if (rgba2 < 123) {
            rgba2 = 123;
        }
        
        if (rgba3 < 31) {
            rgba3 = 31;
        }
        
        $('.nav_fixed').css('background', "rgba(" + rgba1 + "," + rgba2 + "," + rgba3 + ", 1)" );
        $('.nav_fixed ul li a').css('color', "rgba(" + (0.5 * (scrollval-737)) + "," + (0.5 * (scrollval-737)) + "," + (0.5 * (scrollval-737)) + ", 1)" );
    
        
        
    }
    else {
        var nav = $(".nav_fixed");
        nav.removeClass("nav_fixed");
        nav.addClass("nav");
        $('.nav').css('background', "#FFFFFF");
    };     
        
    })
  });





function parallax(){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('margin-top', -(scrolled * 0.6) + 'px');
    $('.bar-parallax').css('margin-top', -(-400 + (scrolled *  0.6)) + 'px');
    $('.bar-parallax1').css('margin-bottom', -(-1200 + (scrolled *  0.6)) + 'px');
    
}

$(window).scroll(function(e){
    parallax();
});


