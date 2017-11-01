//NavBar

$(document).ready(function() {
   'use strict';
    
    $(window).scroll(function() {
        
       'use strict';
        
        if($(window).scrollTop() < 80 ) {
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
                
            });
            
        $(".navbar-default").css({
            "background-color": "rgba(0,0,0, 0.60)" 
        });            
            
        } 
        
        else {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });
        }
        
        $(".navbar-default").css({
            "background-color": "rgba(0,0,0, 0.90)",
            "border-color": "#444"
        });
        
        $(".navbar-brand img").css({
           "height": "35",
            "padding-top": "0px"
        });
        
        $(".navbar-nav > li > a").css({
           "padding-top": "15px" 
        });
        
    });
});


//Counter
$(document).ready(function() {
    
    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });
});

//Gallery

$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});


//Wow Animate


new WOW().init();



// Active Menu on Scroll

$(document).ready(function() {
   'use strict';
    
    $(window).scroll(function() {
    
        
        'use strict';    
        
        
        $("div").each(function() {
           
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            
            if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("actived");
            }
            else {
               $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("actived"); 
            }
            
        });
        
    });
    
});


// Active menu item on click

$(document).ready(function() {
   'use strict';
    
    $(".navbar-nav li a").click(function() {
       'use strict';
        
        $(".navbar-nav li a").parent().removeClass("actived");
        $(this).parent().addClass("actived");
        
    });
    
    //$(".navbar-nav li a").parent
});

//Add Scrolling Page


$('.nav-item, #scroll-to-top')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
