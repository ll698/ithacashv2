


//DYNAMIC NAVBAR FUNCTIONALITY//
$( document ).ready(function() {
    $(window).scroll(function() {
    var scrollval = $(this).scrollTop();
        
    if (scrollval > 737) {
        var nav = $(".nav");
        nav.removeClass("nav");
        nav.addClass("nav_fixed");
        $('.bar1').css('margin-top', "100px");
        
        
    }
    else {
        var nav = $(".nav_fixed");
        nav.removeClass("nav_fixed");
        nav.addClass("nav");
        $('.bar1').css('margin-top', "0px");
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


