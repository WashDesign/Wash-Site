jQuery(document).ready(function($) {

    // Nav Push

    $('#js-nav--primary__btn').on( 'click', function() {

		$(this).toggleClass( 'active' );
		$('body').toggleClass( 'wash-nav--push--toleft' );
		$('#js-wash-nav--push').toggleClass( 'wash-nav--open' );

	});

	// Aside Slide Toggle

	$('#js-wash-slider__info__btn').on( 'click', function() {

    	$(this).toggleClass( 'ux-ctaSpin');
    	$('#js-site-aside__info').toggleClass( 'is-open' );
    	console.log('toggle');

	});


	//! Location Map
  if ( $('#js-findus__map').length ) {

		function initialize() {
			var latlng = new google.maps.LatLng(53.762505,-2.689474);

			var styles = [
			  {
			    stylers: [
			      { saturation: -95 }
			    ]
			  },{
			    featureType: "road",
			    elementType: "geometry",
			    stylers: [
			      { lightness: 100 },
			      { visibility: "simplified" }
			    ]
			  },{
			    featureType: "road",
			    elementType: "labels",
			    stylers: [
			      { visibility: "off" }
			    ]
			  }
			];

			var map_options = {
				zoom: 14,
				center: latlng,
				panControl: false,
				zoomControl: true,
				mapTypeControl: false,
			  scrollwheel: false,
			  navigationControl: false,
			  mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				overviewMapControl: true,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: styles
			};
			var map = new google.maps.Map(document.getElementById("js-findus__map"), map_options);

/*
			var Gicon = new google.maps.MarkerImage('/BIG2526/assets/img/map-marker.png',
				new google.maps.Size(30.0, 50.0),
				new google.maps.Point(0, 0),
				new google.maps.Point(0, 50.0)
			);
*/

		  var Glatlng = new google.maps.LatLng(53.762505,-2.689474);

			var Gmarker = new google.maps.Marker({
				position: Glatlng,
				map: map,
				animation: google.maps.Animation.DROP,
				title: "Wash Design Location",
				/* icon: Gicon, */
			});

			google.maps.event.addListener(Gmarker, 'click', function(event) {

			    if (map.getZoom() != 14) {
					map.setZoom(14);
					map.setCenter(Glatlng);
				} else {
					map.setZoom(18);
					map.setCenter(latlng);
				}

		    });

		}
		initialize();
	}


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


            });

    		if ( $('#js-site-content').find('section').size() > 1 ) {

                if ( ! matchMedia('screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)').matches ) {

                    var anchorTitles = new Array();
                    var slideTitles = new Array();
                    var $i = 0;

                    $('#js-site-content').find('section').each( function(){

                        var title = $(this).find('.page__title').html();

                        if ( null == title) {

                            title = "Page "+$i+1;

                        }
                        anchorTitles[$i] = encodeURI(title.replace(" ","+"));
                        slideTitles[$i] = title;
                        $i++;

                    });

                    $.fn.fullpage({
                        verticalCentered: false,
                        resize : false,
                        anchors: anchorTitles,
                        scrollingSpeed: 700,
                        easing: 'easeInQuart',
                        menu: false,
                        navigation: true,
                        navigationPosition: 'right',
                        navigationTooltips: slideTitles,
                        slidesNavigation: true,
                        slidesNavPosition: 'bottom',
                        loopBottom: false,
                        loopTop: false,
                        loopHorizontal: false,
                        autoScrolling: true,
                        scrollOverflow: true,
                        css3: false,
                        paddingTop: '0',
                        fixedElements: '.frame-y',
                        //paddingBottom: '1.25em',
                        keyboardScrolling: true,
                        touchSensitivity: 15,
                        //events
                        onLeave: function(index, direction){

                            if( direction == "down" ) {

                                if ( index + 1 < $('#js-site-content').find('section').size() ) {

                                    s.slide($('.page').eq(index).data('start'));

                                } else {

                                    // prevent the continous toggle on rebuild (feature page)
                                    if ( !$('body.featured').length ) {

                                        // toggle arrow
                                        s.slide($('.page').eq(index).data('start'));
                                        $('#js-nav-slidr__link--down, #js-nav-slidr__link--up').toggleClass('is-on').stop();

                                    }

                                }

                            }
                            if( direction == "up" ) {

                                if ( index  != ( $('#js-site-content').find('section').size() ) ) {

                                    s.slide($('.page').eq(index-2).data('start'));

                                } else {


                                   // prevent the continous toggle on rebuild (feature page)
                                   if ( !$('body.featured').length ) {

                                       // toggle arrow
                                       s.slide($('.page').eq(index-2).data('start'));
                                       $('#js-nav-slidr__link--down, #js-nav-slidr__link--up').toggleClass('is-on').stop();

                                   }

                                }


                            }

                            console.log(index);

                        },
                        afterLoad: function(anchorLink, index){


                            if ( $('body.featured').length ) {

                                // get active slide
                                var pinHead =$('#js-site-content').find('.active');

                                // check to see if needs pinning
                                if ( pinHead.hasClass('pin') == 1 ){

                                    // change height of main
                                    $('#js-site-main').animate(
                                    {
                                        'top': '0em'
                                    },
                                    'fast',
                                    function() {

                                        $('#js-nav-slidr__link--up').addClass('is-on').stop();
                                        $('#js-nav-slidr__link--down').removeClass('is-on').stop();

                                    });

                                    // recalculate heights
                                    $.fn.fullpage.reBuild();


                                } else {


                                    // change height of main
                                    $('#js-site-main').animate(
                                    {
                                        'top': '7em'
                                    },
                                    'fast',
                                    function() {

                                        $('#js-nav-slidr__link--up').removeClass('is-on').stop();
                                        $('#js-nav-slidr__link--down').addClass('is-on').stop();

                                    });

                                    // recalculate heights
                                    $.fn.fullpage.reBuild();

                                }


                            }



                        },
                        afterRender: function(){},
                        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) { },
                        onSlideLeave: function(anchorLink, index, slideIndex, direction){

                            //if ( $('body.featured').length ) {




                            //}

                        }
                    });

                    $('#js-nav-slidr__link--down').click( function() {

                        $.fn.fullpage.moveSectionDown();

                    });

                    $('#js-nav-slidr__link--up').click( function() {

                        $.fn.fullpage.moveTo(1);
                        s.slide($('.page').eq(0).data('start'));
                        // long slide back to top - //*** SEEMS TO REMEBER WHERE YOU WERE AT
                        //$("#js-site-content").find('.scrollable').each(function() { $(this).animate({ scrollTop: 0 }, "slow").slimScroll({ scroll: '0px' }); })
                    });

                }

            }

        }

    });

    // slidr

 	var s = slidr.create('js-site-aside__media', {
        	after: function(e) { console.log('in: ' + e.in.slidr); },
        	before: function(e) { console.log('out: ' + e.out.slidr); },
        	breadcrumbs: false, // not required
        	direction: 'horizontal',
        	controls: 'none', // not required
        	fade: false,
        	keyboard: true, //*** what are these
        	overflow: false,
        	theme: '#222',
        	timing: { 'linear': '0.7s ease-out' },
        	touch: true,
        	transition: 'linear'

    });


    var startslides = new Array();
    var $i = 0;

    $('.page').each( function(){

        //console.log($(this).data('slides'))

         if ( ! matchMedia('(max-width : 768px)').matches ) {

             if ( ! matchMedia('screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)').matches ) {

                 var slides = $(this).data('slideloop');

            }

        }

        if ( slides ) {

            //console.log(slides);

            s.add('h', slides);

            startslides[$i] = $(this).data('start');
            $i++;

        }

    });

    if ( ! matchMedia('(max-width : 768px)').matches ) {

        if ( ! matchMedia('screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)').matches ) {

            startslides[$i] = startslides[0];

        }

    }

    if ( matchMedia('(max-width : 768px)').matches  ) {


        $('#js-site-aside__media').find('div').each(function(){

            startslides[$i] = $(this).data('slidr');
            $i++;

        });

        startslides[$i] = startslides[0];

        s.add('h', startslides);


    }

    if ( matchMedia('screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)').matches ) {

        $('#js-site-aside__media').find('div').each(function(){

            startslides[$i] = $(this).data('slidr');
            $i++;

        });

        startslides[$i] = startslides[0];

        s.add('h', startslides);


    }


    s.add('v', startslides, 'fade');

    s.start();



    // slidr bind

    var isSingle = false;

    if ( $('.singlepage').length ) {

        isSingle = true;

    }

    if ( $('.multipage').length ) {

        if ( matchMedia('screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)').matches ) {

            isSingle = true;

        }

    }

    if ( isSingle ) {

        var a = slidr.create('js-site-aside__info', {
            	breadcrumbs: false, // not required
            	direction: 'horizontal',
            	controls: 'none', // not required
            	fade: false,
            	keyboard: true, //*** what are these
            	overflow: false,
            	theme: '#222',
            	timing: { 'linear': '0.7s ease-out' }, 
            	touch: false,
            	transition: 'linear',
            	after: function(e) {
            		BackgroundCheck.refresh();
            		console.log('in: ' + e.in.slidr);
            	},
				before: function(e) { 	
					console.log('out: ' + e.out.slidr);
					BackgroundCheck.init({
						targets: '.site-aside__info > div',
						images: '.site-aside__media > div'
					}); 
				},

        })

        var startslides = new Array();
        var $i = 0;

        $('#js-site-aside__info').find('div').each(function(){

            startslides[$i] = $(this).data('slidr');
            $i++;

        });

        startslides[$i] = startslides[0];

        a.add('h', startslides);

        a.start();

    }

     // slidr controls

    $('#js-nav-slidr__link--left').on('click', function(){

		s.slide('left');
		if ( isSingle ) {
            a.slide('left');
        }
        event.preventDefault();

	});

	$('#js-nav-slidr__link--right').on('click', function(){

		s.slide('right');
		if ( isSingle ) {
    		a.slide('right');
        }
		event.preventDefault();

	});

	// arrow right //*** extend for multipage

	$('.slidr--arrow__link').on('click', function(){

	    s.slide('right');
	    if ( isSingle ) {
		    a.slide('right');
		}
		event.preventDefault();

	});


});