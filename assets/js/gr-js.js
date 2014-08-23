// NAV SLIDE
(function() {

  $('#js-nav--primary__btn').on( 'click', function() {
    $(this).toggleClass( 'active' );
    $('body').toggleClass( 'wash-nav--push--toleft' );
    $('#js-wash-nav--push').toggleClass( 'wash-nav--open' );
  });

  $('#js-wash-slider__info__btn').on( 'click', function() {

      $(this).toggleClass( 'ux-ctaSpin');
      $('#js-site-aside__info').toggleClass( 'is-open' );
      console.log('toggle');

  });

}());

// SCROLL DOWN ON EACH PAGE
/*
- When the user clicks on #js-nav-slidr__link--down we want the page to
- move to the next slide down unless its the last then scroll to the top.

- The slides will be various heights and only one slide should display at
- a time.

- #js-nav-slidr__link--down needs to be positioned at the bottom of the screen.

NOTES
======
Case Studies: Looks like there is a wrapper of items and each slide is called item?

*/

(function() {

  &('#js-nav-slidr__link--down').on('click', function() {

  });

}());
