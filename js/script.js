


//DYNAMIC NAVBAR FUNCTIONALITY//
function NavCheck(threshold){
    $(window).scroll(function() {
    var scrollval = $(this).scrollTop();

    //console.log(threshold);
        
    if (scrollval > threshold) {
        var nav = $(".nav");
        nav.removeClass("nav");
        nav.addClass("nav_fixed");
        
    }
    else {
        var nav = $(".nav_fixed");
        nav.removeClass("nav_fixed");
        nav.addClass("nav");
        $('.nav').css('background', "#FFFFFF");
    };
  });
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 500px
    console.log("Computer");
    NavCheck(737);
  }
  else {
    // window width is less than 500px
    //NEED TO PREVENT SECOND LISTENER FROM 
    //CHANGING FROM COMPUTER TO TABLET INCORRECTLY
    if (window.matchMedia("(min-width: 320px)").matches){
        console.log("Tablet");
        NavCheck(385);
    }
    else{
        console.log("Mobile");
        NavCheck(185); 
    }
  }
}


$( document ).ready(function() {
    if (matchMedia) {
    var mq = window.matchMedia("(min-width: 500px)");
    //var mq2 = window.matchMedia("(min-width: 320px)");
    mq.addListener(WidthChange);
    //mq2.addListener(WidthChange2);
    WidthChange(mq);
    //WidthChange2(mq2);
    } 
});

/*// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 750px
    console.log("Computer");
    NavCheck(737);
  }
  else {
    // window width is less than 750px
    //NEED TO PREVENT SECOND LISTENER FROM 
    //CHANGING FROM COMPUTER TO TABLET INCORRECTLY
    console.log("Tablet");
    NavCheck(385);
  }
}

function WidthChange2(mq2) {
  if (mq2.matches) {
    // window width is at least 320px
    //NEED TO KEEP FOR RESIZING FROM MOBILE TO TABLET
    console.log("Tablet");
    NavCheck(385);
  }
  else{
    console.log("Mobile");
    NavCheck(185); 
  }

}

$( document ).ready(function() {
    if (matchMedia) {
    var mq = window.matchMedia("(min-width: 750px)");
    var mq2 = window.matchMedia("(min-width: 320px)");
    mq.addListener(WidthChange);
    mq2.addListener(WidthChange2);
    WidthChange(mq);
    WidthChange2(mq2);
    } 
});*/


function parallax(){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('margin-top', -(scrolled * 0.6) + 'px');
    $('.bar-parallax').css('margin-top', -(-400 + (scrolled *  0.6)) + 'px');
    $('.bar-parallax1').css('margin-bottom', -(-1200 + (scrolled *  0.6)) + 'px');
    
}

$(window).scroll(function(e){
    parallax();
});


