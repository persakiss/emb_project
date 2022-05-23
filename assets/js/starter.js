// Importing JavaScript
//
// You have two choices for including Bootstrap's JS files—the whole thing,
// or just the bits that you need.

$(document).ready(function () {
    console.log($('#carouselwithIndicators').css('height')); // check the initial height of the carousel;

    // now apply this height as a max-height on all the image items; css will handle the rest;
    $('#carouselwithIndicators').find('.carousel-item img').css('max-height', $('#carouselwithIndicators').css('height'))
});

// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


// Option 2
//
// Import just what we need

// If you're importing tooltips or popovers, be sure to include our Popper.js dependency
// import "../../node_modules/popper.js/dist/popper.min.js";

//import "../../node_modules/bootstrap/js/dist/util.js";
//import "../../node_modules/bootstrap/js/dist/modal.js";
