


//DYNAMIC NAVBAR FUNCTIONALITY//
$( document ).ready(function() {
    $(window).scroll(function() {
    var scrollval = $(this).scrollTop();
        
    if (scrollval > 737) {
        var nav = $(".nav");
        nav.removeClass("nav");
        nav.addClass("nav_fixed");
        
    }
    else {
        var nav = $(".nav_fixed");
        nav.removeClass("nav_fixed");
        nav.addClass("nav");
    };
  });
});
