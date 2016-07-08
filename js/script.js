




$( document ).ready(function() {
    $(window).scroll(function() {
    var nav = $(".nav");
    var scrollval = $(this).scrollTop();
    console.log(scrollval);
  
    if (scrollval > 752) {
        console.log("test");
        nav.removeClass("nav");
        nav.addClass("nav_fixed");
    }
  });
});


$( document ).ready(function() {
    $(window).scroll(function() {
    var nav = $(".nav");
    var scrollval = $(this).scrollTop();
    console.log(scrollval);
  
    if ((scrollval < 752) && nav.hasClass("nav_fixed")) {
        console.log("test");
        nav.removeClass("nav");
        nav.addClass("nav_fixed");
    }
  });
});