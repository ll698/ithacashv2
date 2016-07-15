


//DYNAMIC NAVBAR FUNCTIONALITY//
$( document ).ready(function() {
    $(window).scroll(function() {
    var scrollval = $(this).scrollTop();
        
    if (scrollval > 737) {
        console.log(1);
        var nav = $(".nav");
        nav.removeClass("nav");
        nav.addClass("nav_fixed");
        
    }
    else {
        console.log(2);
        var nav = $(".nav_fixed");
        nav.removeClass("nav_fixed");
        nav.addClass("nav");
    };
  });
});

