


//DYNAMIC NAVBAR FUNCTIONALITY//
$( document ).ready(function() {
    $(window).scroll(function() {
    var scrollval = $(this).scrollTop();
        
    if (scrollval > 737) {
        var nav = $(".nav");
        nav.removeClass("nav");
        nav.addClass("nav_fixed");
        $('.nav_fixed').css('background', "rgba(0,0,0," + ((scrollval/100) * 0.05) + ")");
        
    }
    else {
        var nav = $(".nav_fixed");
        nav.removeClass("nav_fixed");
        nav.addClass("nav");
        $('.nav_fixed').css('background', "white");
    };     
        
    })
  });





function parallax(){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('margin-top', -(scrolled * 0.6) + 'px');
    $('.bar-parallax').css('margin-top', -(-400 + (scrolled *  0.6)) + 'px');
    
}

$(window).scroll(function(e){
    parallax();
});


