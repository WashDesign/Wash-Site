jQuery(document).ready(function(e){e("#js-nav--primary__btn").on("click",function(){e(this).toggleClass("active");e("body").toggleClass("wash-nav--push--toleft");e("#js-wash-nav--push").toggleClass("wash-nav--open")});e("#js-wash-slider__info__btn").on("click",function(){e(this).toggleClass("ux-ctaSpin");e("#js-site-aside__info").toggleClass("is-open");console.log("toggle")});mediaCheck({media:"(max-width: 767px)",entry:function(){e(window).bind("load resize",function(){e(".page").css("height","auto");e("#js-site-main").css("padding-bottom",e(".site-footer").height())})}});mediaCheck({media:"(min-width: 768px)",entry:function(){e("#js-nav--primary__btn.active").removeClass("active");e("body.wash-nav--push--toleft").removeClass("wash-nav--push--toleft");e("#js-wash-nav--push.wash-nav--open").removeClass("wash-nav--open");e(window).bind("load resize",function(){e("#js-site-main").css("padding-bottom")!="204.796875px"&&e("#js-site-main").css("padding-bottom","0")});e(".page").length>1&&(matchMedia("screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)").matches||e.fn.fullpage({verticalCentered:!1,resize:!0,anchors:["firstSlide","secondSlide","thirdSlide","longSlide","lastSlide"],scrollingSpeed:700,easing:"easeInQuart",menu:!1,navigation:!0,navigationPosition:"right",navigationTooltips:["firstSlide","secondSlide","thirdSlide","longSlide","lastSlide"],slidesNavigation:!0,slidesNavPosition:"bottom",loopBottom:!1,loopTop:!1,loopHorizontal:!1,autoScrolling:!0,scrollOverflow:!0,css3:!1,paddingTop:"0",fixedElements:".frame-y",keyboardScrolling:!0,touchSensitivity:15,onLeave:function(e,n){n=="down"&&t.slide("right");n=="up"&&t.slide("left")},afterLoad:function(e,t){},afterRender:function(){},afterSlideLoad:function(e,t,n,r){},onSlideLeave:function(e,t,n,r){}}))}});var t=slidr.create("js-site-aside__media",{after:function(e){console.log("in: "+e.in.slidr)},before:function(e){console.log("out: "+e.out.slidr)},breadcrumbs:!1,direction:"horizontal",controls:"none",fade:!1,keyboard:!0,overflow:!1,theme:"#222",timing:{linear:"0.7s ease-out"},touch:!0,transition:"linear"}).add("h",["one","two","three","four","one"]).start(),n=!1;e(".singlepage").length&&(n=!0);if(n)var r=slidr.create("js-site-aside__info",{after:function(e){console.log("in: "+e.in.slidr)},before:function(e){console.log("out: "+e.out.slidr)},breadcrumbs:!1,direction:"horizontal",controls:"none",fade:!1,keyboard:!0,overflow:!1,theme:"#222",timing:{linear:"0.7s ease-out"},touch:!1,transition:"linear"}).add("h",["one","two","three","four","one"]).start();e("#js-nav-slidr__link--right").on("click",function(){t.slide("left");n&&r.slide("left");event.preventDefault()});e("#js-nav-slidr__link--left").on("click",function(){t.slide("right");n&&r.slide("right");event.preventDefault()});e("#js-slidr--arrow__link").on("click",function(){t.slide("right");n&&r.slide("right");event.preventDefault()})});