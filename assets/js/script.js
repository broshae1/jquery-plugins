console.log("hello world");

if(jQuery) {
    console.log("jquery loaded")
}
else {
    console.log("no jquery")
}

// let mobileMenuOpen = false;

// $("#mobile-menu-button").click(function(){
    
//     if(mobileMenuOpen == false) {
//         $("#main-menu").removeClass("display-none-mobile");
//         $("#mobile-menu-text").text("Close");
//         let close = $("#mobile-menu-icon").attr("src").replace("menu", "close");
//         console.log(close);
//         $("#mobile-menu-icon").attr("src", close);

//         mobileMenuOpen = true;
//     }

//     else {
//         $("#main-menu").addClass("display-none-mobile");
//         $("#mobile-menu-text").text("Menu");
//         let open = $("#mobile-menu-icon").attr("src").replace("close", "menu");

//         $("#mobile-menu-icon").attr("src", open);

//         mobileMenuOpen = false; 
//     }
// });

// $("a[data-bakery-image]").click(function(){
//  let image = $(this).children("img").attr("src");
//  $("#overlay-image").attr("src", image);
// });

new Splide( '.splide', {
    type   : 'loop',
    heightRatio: 0.5,
} ).mount();

AOS.init({
    offset: 200,
    duration: 1000,
    delay: 300
})


$.modal.defaults = {
    closeExisting: true,    // Close existing modals. Set this to false if you need to stack multiple modal instances.
    escapeClose: true,      // Allows the user to close the modal by pressing `ESC`
    clickClose: true,       // Allows the user to close the modal by clicking the overlay
    closeText: 'Close',     // Text content for the close <a> tag.
    closeClass: '',         // Add additional class(es) to the close <a> tag.
    showClose: true,        // Shows a (X) icon/link in the top-right corner
    modalClass: "modal",    // CSS class added to the element being displayed in the modal.
    blockerClass: "jquery-modal",  // CSS class added to the overlay (blocker).
  
    // HTML appended to the default spinner during AJAX requests.
    spinnerHtml: '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div>',
  
    showSpinner: true,      // Enable/disable the default spinner during AJAX requests.
    fadeDuration: 300,     // Number of milliseconds the fade transition takes (null means no transition)
    fadeDelay: 1.0          // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
  };