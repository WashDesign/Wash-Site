jQuery(document).ready(function(e){e("#js-nav--primary__btn").on("click",function(){e(this).toggleClass("active");e("body").toggleClass("wash-nav--push--toleft");e("#js-wash-nav--push").toggleClass("wash-nav--open")});e("#js-wash-slider__info__btn").on("click",function(){e(this).toggleClass("ux-ctaSpin");e("#js-site-aside__info").toggleClass("is-open");console.log("toggle")});mediaCheck({media:"(max-width: 767px)",entry:function(){e(window).bind("load resize",function(){e(".page").css("height","auto");e("#js-site-main").css("padding-bottom",e(".site-footer").height())})}});mediaCheck({media:"(min-width: 768px)",entry:function(){e("#js-nav--primary__btn.active").removeClass("active");e("body.wash-nav--push--toleft").removeClass("wash-nav--push--toleft");e("#js-wash-nav--push.wash-nav--open").removeClass("wash-nav--open");e(window).bind("load resize",function(){e("#js-site-main").css("padding-bottom")!="204.796875px"&&e("#js-site-main").css("padding-bottom","0")});if(e("#js-site-content").find("section").size()>1&&!matchMedia("screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)").matches){var n=new Array,r=new Array,i=0;e("#js-site-content").find("section").each(function(){var t=e(this).find(".page__title").html();null==t&&(t="Page "+i+1);n[i]=encodeURI(t.replace(" ","+"));r[i]=t;i++});e.fn.fullpage({verticalCentered:!1,resize:!1,anchors:n,scrollingSpeed:700,easing:"easeInQuart",menu:!1,navigation:!0,navigationPosition:"right",navigationTooltips:r,slidesNavigation:!0,slidesNavPosition:"bottom",loopBottom:!1,loopTop:!1,loopHorizontal:!1,autoScrolling:!0,scrollOverflow:!0,css3:!1,paddingTop:"0",fixedElements:".frame-y",keyboardScrolling:!0,touchSensitivity:15,onLeave:function(n,r){if(r=="down")if(n+1<e("#js-site-content").find("section").size())t.slide(e(".page").eq(n).data("start"));else if(!e("body.featured").length){t.slide(e(".page").eq(n).data("start"));e("#js-nav-slidr__link--down, #js-nav-slidr__link--up").toggleClass("is-on").stop()}if(r=="up")if(n!=e("#js-site-content").find("section").size())t.slide(e(".page").eq(n-2).data("start"));else if(!e("body.featured").length){t.slide(e(".page").eq(n-2).data("start"));e("#js-nav-slidr__link--down, #js-nav-slidr__link--up").toggleClass("is-on").stop()}console.log(n)},afterLoad:function(t,n){if(e("body.featured").length){var r=e("#js-site-content").find(".active");if(r.hasClass("pin")==1){e("#js-site-main").animate({top:"0em"},"fast",function(){e("#js-nav-slidr__link--up").addClass("is-on").stop();e("#js-nav-slidr__link--down").removeClass("is-on").stop()});e.fn.fullpage.reBuild()}else{e("#js-site-main").animate({top:"7em"},"fast",function(){e("#js-nav-slidr__link--up").removeClass("is-on").stop();e("#js-nav-slidr__link--down").addClass("is-on").stop()});e.fn.fullpage.reBuild()}}},afterRender:function(){},afterSlideLoad:function(e,t,n,r){},onSlideLeave:function(e,t,n,r){}});e("#js-nav-slidr__link--down").click(function(){e.fn.fullpage.moveSectionDown()});e("#js-nav-slidr__link--up").click(function(){e.fn.fullpage.moveTo(1);t.slide(e(".page").eq(0).data("start"))})}}});var t=slidr.create("js-site-aside__media",{after:function(e){console.log("in: "+e.in.slidr)},before:function(e){console.log("out: "+e.out.slidr)},breadcrumbs:!1,direction:"horizontal",controls:"none",fade:!1,keyboard:!0,overflow:!1,theme:"#222",timing:{linear:"0.7s ease-out"},touch:!0,transition:"linear"}),n=new Array,r=0;e(".page").each(function(){if(!matchMedia("(max-width : 768px)").matches&&!matchMedia("screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)").matches)var i=e(this).data("slideloop");if(i){t.add("h",i);n[r]=e(this).data("start");r++}});matchMedia("(max-width : 768px)").matches||matchMedia("screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)").matches||(n[r]=n[0]);if(matchMedia("(max-width : 768px)").matches){e("#js-site-aside__media").find("div").each(function(){n[r]=e(this).data("slidr");r++});n[r]=n[0];t.add("h",n)}if(matchMedia("screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)").matches){e("#js-site-aside__media").find("div").each(function(){n[r]=e(this).data("slidr");r++});n[r]=n[0];t.add("h",n)}t.add("v",n,"fade");t.start();var i=!1;e(".singlepage").length&&(i=!0);e(".multipage").length&&matchMedia("screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)").matches&&(i=!0);if(i){var s=slidr.create("js-site-aside__info",{after:function(e){console.log("in: "+e.in.slidr)},before:function(e){console.log("out: "+e.out.slidr)},breadcrumbs:!1,direction:"horizontal",controls:"none",fade:!1,keyboard:!0,overflow:!1,theme:"#222",timing:{linear:"0.7s ease-out"},touch:!1,transition:"linear"}),n=new Array,r=0;e("#js-site-aside__info").find("div").each(function(){n[r]=e(this).data("slidr");r++});n[r]=n[0];s.add("h",n);s.start()}e("#js-nav-slidr__link--left").on("click",function(){t.slide("left");i&&s.slide("left");event.preventDefault()});e("#js-nav-slidr__link--right").on("click",function(){t.slide("right");i&&s.slide("right");event.preventDefault()});e(".slidr--arrow__link").on("click",function(){t.slide("right");i&&s.slide("right");event.preventDefault()})});