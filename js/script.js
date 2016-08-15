var compPoint = 738;
var tabPoint = 385;
var mobPoint = 185;

$( document ).ready(function() {
    //Stuff
});

//DYNAMIC NAVBAR FUNCTIONALITY//
var medialist = [window.matchMedia("(min-width: 500px)"), 
        window.matchMedia("(min-width: 320px)")
    ];

function NavCheck(threshold){
    $(window).scroll(function() {
    var scrollval = $(this).scrollTop();

    //console.log(threshold);
        
    if (scrollval > threshold) {
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
 
  });
}

// media query change
function WidthChange(mq) {
  if (medialist[0].matches) { //If the window is at leastthe value of 
    NavCheck(compPoint);
    $(".menu").show();
    $("#hamburger").hide();
    $("#dropdown").removeClass("dropdownlist");
  }
  else if (medialist[1].matches){
    NavCheck(tabPoint);
    $(".menu").show();
    $("#hamburger").hide();
    $("#dropdown").removeClass("dropdownlist");
  }
  else{
    NavCheck(mobPoint);
    $(".menu").hide();
    $("#hamburger").show();
    $("#dropdown").addClass("dropdownlist");
  }
}

for (var i=0; i<medialist.length;i++){
    WidthChange(medialist[i]);
    medialist[i].addListener(WidthChange);
};

$("#hamburger").on ('click', function(){
    console.log("Clicked!");
    $(".menu").toggle();
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


