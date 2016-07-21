


//DYNAMIC NAVBAR FUNCTIONALITY//
/*
//Luca's original code

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

*/

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
    };
  });
}

// media query change
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
});

/*
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
    };
  });
}

// media query change
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
});


*/




//SUBSECTION NAVBAR FUNCTIONALITY//

