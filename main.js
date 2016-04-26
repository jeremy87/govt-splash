$(document).ready(function(){
// FULL BACKGROUND
// $(function() {

//     function abso() {

//         $('#mainBG').css({
//             position: 'absolute',
//             width: $(window).width(),
//             height: $(window).height()
//         });

//     }

//     $(window).resize(function() {
//         abso();         
//     });

//     abso();

// });
// END FULL BACKGROUND

// SLIDE OUT
    $('.slideout-menu-toggle').on('click', function(event){
        event.preventDefault();
        // create menu variables
        var slideoutMenu = $('.contact-slideout');
        var slideoutMenuWidth = $('.contact-slideout').width();
        
        // toggle open class
        slideoutMenu.toggleClass("open");
        
        // slide menu
        if (slideoutMenu.hasClass("open")) {
            slideoutMenu.animate({
                left: "0px"
            }); 
        } else {
            slideoutMenu.animate({
                left: -slideoutMenuWidth
            }, 250);    
        }
    });
// END SLIDE OUT

// POP UP
        // Initialize Variables
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("popup");
        // Close Popup Event
    $("#popup-close").click(function() {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });
    // Show Overlay and Popup
    $("#popup-button").click(function(){
        overlay.style.display = 'block';
        popup.style.display = 'block';
    });
// POP UP END

// END TAGS
});