jQuery(document).ready(function($) {


    $('#js-nav--primary__btn').on( 'click', function() {

		$(this).toggleClass( 'active' );
		$('body').toggleClass( 'wash-nav--push--toleft' );
		$('#js-wash-nav--push').toggleClass( 'wash-nav--open' );

	});

	mediaCheck({
    media: '(max-width: 767px)',
    entry: function() {

    		$(window).bind("load resize", function() {

    			$('.page').css('height', 'auto');
    			$('#js-site-main').css( 'padding-bottom', $('.site-footer').height());

    		});

        }

    });



    mediaCheck({

        media: '(min-width: 768px)',
        entry: function() {


           $('#js-nav--primary__btn.active').removeClass( 'active' );
           $('body.wash-nav--push--toleft').removeClass( 'wash-nav--push--toleft' );
           $('#js-wash-nav--push.wash-nav--open').removeClass( 'wash-nav--open' );

            $(window).bind("load resize", function() {

    			if ( $('#js-site-main').css( 'padding-bottom') != "204.796875px" ) { //*** HACKISACK


    			    $('#js-site-main').css( 'padding-bottom', '0');

    			}

    			var height = $(window).height(),
    				offSetX = $('.site-header').outerHeight();
    				offSetY = 40/* $('.frame--top').height() */;

    			$('.page').height(height-offSetX - offSetY)/* .width($(window).width()) */;

    		});

        }

    });

 	var s = slidr.create('js-site-aside__media', {
        	after: function(e) { console.log('in: ' + e.in.slidr); },
        	before: function(e) { console.log('out: ' + e.out.slidr); },
        	breadcrumbs: true,
        	direction: 'horizontal',
        	fade: false,
        	keyboard: true,
        	overflow: true,
        	theme: '#222',
        	timing: { 'linear': '0.7s ease-out' },
        	touch: true,
        	transition: 'linear'

    }).start();

    /*
$.fn.fullpage({
        verticalCentered: false,
        resize : true,
        anchors:['firstSlide', 'secondSlide', 'thirdSlide', 'longSlide', 'lastSlide'],
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        menu: false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'longSlide', 'lastSlide'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        autoScrolling: true,
        scrollOverflow: true,
        css3: false,
        paddingTop: '0',
        paddingBottom: '0',
        fixedElements: '#frame',
        normalScrollElements: '.frame',
        keyboardScrolling: true,
        touchSensitivity: 15,

        //events
        onLeave: function(index, direction){ if( direction == "down" ) { s.slide('right'); } if( direction == "up" ) { s.slide('left'); } },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){  }
    });
*/



	/*
$('.site-header').click(function(){

		s.slide('right');

	});
*/

});