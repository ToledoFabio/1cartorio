/*
    File Name: script.js
    by Tolga Can
    RT-Theme 17
*/


/* ******************************************************************************* 

	remove no-js - javascript is enabled

********************************************************************************** */ 
jQuery(document).ready(function() {
	jQuery("html").removeClass("no-js"); 
});


/* ******************************************************************************* 

	100% background

********************************************************************************** */ 
jQuery(window).load(function() {
	jQuery("#background").fullBg();
}); 



/* ******************************************************************************* 

	Drop Down menu

********************************************************************************** */ 
jQuery(document).ready(function() { 
	   
 	jQuery("#navigation ul").css({display: ""}); 
	
	jQuery("#navigation li").each(function()
	{
		jQuery(this).hover(function()
		{
		    var position = jQuery(this).position();
		    var width = jQuery(this).find("a:first-child").width();
		    
			jQuery(this).find('ul:first').stop().css({
			
				 height:"auto",
				 overflow:"hidden",
				 zIndex:"1000",
				 position:"absolute",
				 display:"none"
				 }).slideDown(200, function()
			{
			jQuery(this).css({
				 height:"auto",
				 overflow:"visible"
			}); 
		});
			  
		},
		    
		function()
		{	
			jQuery(this).find('ul:first').stop().slideUp(200, function()
			{	
				  jQuery(this).css({
				  display:"none",
				  overflow:"hidden"
				  });
			});
		});	
	});  

}); 



/* ******************************************************************************* 

	Helper Fucntions For Flex Slider

********************************************************************************** */ 


jQuery(window).resize(function() { // description fix on window resize
	descFix();
});


// before
function onBefore(slider) {
	var thisID = "#"+slider.attr("id");
	if(slider.width()>920){
		jQuery(thisID+' .flex-caption').animate({'bottom':'0px','opacity':'0'},0,'easeOutBack'); 
	}
	
}

// after  
function onAfter(slider) {
	var thisID = "#"+slider.attr("id");
	if(slider.width()>920){
		jQuery(thisID+' .flex-caption').animate({'bottom':'40px','opacity':'1'},800,'easeOutBack'); 
	}
} 

// description fix
function descFix() {
	jQuery('.flex-caption').css({'bottom':'0','opacity':'1'});
}


/* ******************************************************************************* 

	NIVO SLIDER

********************************************************************************** */  

// Nivo Slider
jQuery(document).ready(function(){
	if (jQuery('#nivo_slider').length>0){
	    jQuery('#nivo_slider').nivoSlider({ 
			pauseTime:8000, // How long each slide will show = 8 seconds
			captionOpacity:1,
			controlNav: true,
			effect: 'random'  
		});
	}
});
    

/* ******************************************************************************* 

	SOCIAL MEDIA EFFECT

********************************************************************************** */  
(function($){
    $.fn.rt_social_media_effect = function(options) {
    var settings = $.extend({}, $.fn.rt_social_media_effect.defaults, options);
 
		// If the browser is IE 7-6
		var ua = jQuery.browser;

		if (  ua.msie && ua.version.slice(0,1) == 6 || ua.version.slice(0,1) == 7 ) { // hide if before ie 8
			return false; 
		}else{	
		
			var social_media_icon=$(this); 
		
			social_media_icon.each(function(){
				var the_name = jQuery(this).attr("title"); // get the name 		
				jQuery(this).append('<div class="social_tip">'+the_name+'</div> '); //create new div name		
			}); 
				
			//the effect   
			 if (ua.msie){
				jQuery("ul.social_media_icons li img").mouseover(function(){
					if(parseInt(jQuery(window).width())>920){ 
						jQuery(this).stop().animate({ 'opacity':'0.7'}, 100, "easeInQuad");
						jQuery(this).next('div.social_tip').stop().show();
					}
				}).mouseout(function(){
					if(parseInt(jQuery(window).width())>920){ 
						jQuery(this).stop().animate({ 'opacity':'1'}, 100, "easeInQuad");
						jQuery(this).next('div.social_tip').stop().hide();
					}
				});
			}else{
				jQuery("ul.social_media_icons li img").mouseover(function(){
					if(parseInt(jQuery(window).width())>920){ 
						jQuery(this).stop().animate({ 'opacity':'0.7'}, 100, "easeInQuad");
						jQuery(this).next('div.social_tip').stop().animate({ 'opacity':'1','width':'show'}, 100, "easeInQuad");
					}
				}).mouseout(function(){
					if(parseInt(jQuery(window).width())>920){ 
						jQuery(this).stop().animate({ 'opacity':'1'}, 100, "easeInQuad");
						jQuery(this).next('div.social_tip').stop().animate({ 'opacity':'0','width':'hide'}, 0);
					}
				});
			}
		}  
	}; 
})(jQuery);
jQuery(document).ready(function() {
    jQuery('#footer ul.social_media_icons li a, .social_media_top ul.social_media_icons li a').rt_social_media_effect();
});



/* ******************************************************************************* 

	FORM FIELD TEXT-BACK FUNCTION

********************************************************************************** */  
jQuery(document).ready(function() {

var form_inputs=jQuery(".showtextback");

	form_inputs.each(function(){
	
		jQuery(this).focus( function()
		{
			val = jQuery(this).val();
			if (jQuery(this).attr("alt") != "0"){
			    jQuery(this).attr("alt",jQuery(this).attr("value")); 
			    jQuery(this).attr("value","");
			}
		});
	
		jQuery(this).blur( function(){
			if (jQuery(this).attr("alt") != "0"){
				val = jQuery(this).val(); 
				if (val == '' || val == jQuery(this).attr("alt")){
				    jQuery(this).attr("value",jQuery(this).attr("alt"));
				}
			}
		});
	
		jQuery(this).keypress( function(){  
			jQuery(this).attr("alt","0");	    
		});                 
	});  
         
}); 


/* ******************************************************************************* 

	SLIDE TO TOP

********************************************************************************** */  
jQuery(document).ready(function(){
    jQuery(".line span.top").click(function() {
        jQuery('html, body').animate( { scrollTop: 0 }, 'slow' );
    });
});


/* ******************************************************************************* 

	JQUERY TABS

********************************************************************************** */  
jQuery(function() {// perform JavaScript after the document is scriptable.
    jQuery("ul.tabs").tabs("> .pane", {effect: 'fade'});
    
    jQuery(".accordion").tabs(".pane", {tabs: '.title', effect: 'slide'});
    jQuery(".scrollable").scrollable();


    jQuery(".items.big_image img").click(function() {
    
       // see if same thumb is being clicked
       if (jQuery(this).hasClass("active")) { return; }
    
       // calclulate large image's URL based on the thumbnail URL (flickr specific)
       var url = jQuery(this).attr("alt");
	 
    
       // get handle to element that wraps the image and make it semi-transparent
       var wrap = jQuery("#image_wrap").fadeTo("medium", 0.5);
    
       // the large image from www.flickr.com
       var img = new Image();
    
    
       // call this function after it's loaded
       img.onload = function() {
    
          // make wrapper fully visible
          wrap.fadeTo("fast", 1);
    
          // change the image
          wrap.find("img").attr("src", url);
    
       };
    
       // begin loading the image from www.flickr.com
       img.src = url;
    
       // activate item
       jQuery(".items img").removeClass("active");
       jQuery(this).addClass("active");
    
    // when page loads simulate a "click" on the first image
    }).filter(":first").click();

}); 
 
//rt accordions 
jQuery(function($){
    $(document).ready(function(){ 
     	$(".rt-toggle .toggle-content").hide(); 
		$(".rt-toggle .open .toggle-content").show();  
     	
     	$(".rt-toggle ol li .toggle-head").click(function(){ 
 
     		if($(this).parent("li").hasClass("open")){ 
	     		$(this).parent("li").removeClass("open").find(".toggle-content").stop().slideUp(300);  
     		}else{
	  	  		$(this).parents("ol").find("li.open").removeClass("open").find(".toggle-content").stop().slideUp(300);  
	  	  		$(this).parent("li").addClass("open").find(".toggle-content").stop().slideDown(300, "easeInQuad");	
	  	  	} 
	 	});
});  
});

//tool tips  
jQuery(document).ready(function(){
	jQuery('.j_ttip,.j_ttip2,.widget ul.social_media_icons li a').colorTip({color:'black'});
});




/* ******************************************************************************* 

	FLICKR

	edit flickr_user_id and flickr_thumbnail_count values

********************************************************************************** */  

var flickr_user_id = '36587311@N08'; //your flickr user id
var flickr_thumbnail_count = 6; //the thumbmail number to show

$(document).ready(function(){
	if ($('.flickr_thumbs').length>0){
		$(".flickr_thumbs").jflickrfeed({
			limit: flickr_thumbnail_count,
			qstrings: {id: flickr_user_id }, 
			itemTemplate: '<li><span class="border"><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></span></li>'
		});
 	}
});


/* ******************************************************************************* 

	FADE EFFECT FOR THE FLICKR WIDGET

********************************************************************************** */  
jQuery(window).load(function() {
     
	var flickrItems=jQuery(".flickr_thumbs img");
	
	flickrItems.mouseover(function(){
		
		flickrItems.each(function(){
		    jQuery(this).stop().animate({ opacity:"0.4"}, 300, "easeInQuad");
		});
		
		jQuery(this).stop().animate({ opacity:"1"}, 100, "easeInQuad");
		
	}).mouseout(function(){
		flickrItems.each(function(){
		    jQuery(this).stop().animate({ opacity:"1"}, 200, "easeInQuad");
		});
	});   
});  


/* ******************************************************************************* 

	FORM VALIDATION

********************************************************************************** */  
jQuery(document).ready(function(){

	// show a simple loading indicator
	var loader = jQuery('<img src="images/loading.gif" alt="..." />')
			.appendTo(".loading");
			loader.hide();

	jQuery.validator.messages.required = "";

	jQuery(".validate_form").each(function(){ 	
			var result = jQuery(this).parents(".contact_form").find(".result");
		var v = jQuery(this).validate({
		      submitHandler: function(form) {
		              jQuery(form).ajaxSubmit({
		                      target: result,
						beforeSubmit:  function() {loader.show()}, 
						success:   function() {loader.hide()}
		              });
		      }
		});
		});
 }); 


/* ******************************************************************************* 

	PRETTY PHOTO

********************************************************************************** */  
jQuery(document).ready(function(){
	jQuery('a[data-gal]').each(function() {
	    jQuery(this).attr('rel', jQuery(this).data('gal'));
	});  	
	jQuery("a[rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
}); 


/* ******************************************************************************* 

	FLOATING SIDERBARS

********************************************************************************** */  
jQuery(window).load(function(){
	var $window = jQuery(window);
	var $sidebar = jQuery(".sidebar");
	var $footer = jQuery(".footer");
	var $content = jQuery(".content");
	var $WPbar = jQuery("#wpadminbar").length;
	var $addHeigth = 0;
	if ($WPbar>0) $addHeigth = 28;

	if($sidebar.length>0){
		var sidebarTop = $sidebar.position().top;
		var sidebarHeight = $sidebar.height()+10;
		var contentHeight = $content.height(); 
		var footerTop = $footer.position().top;

		
		if(contentHeight>sidebarHeight){
			$window.scroll(function(event) {
				$sidebar.addClass('fixed');
				scrollTop = $window.scrollTop(),
				topPosition = Math.max(0, (sidebarTop) - scrollTop),
				topPosition = Math.min(topPosition, (footerTop - scrollTop) - sidebarHeight);
				$sidebar.css('top', topPosition+$addHeigth);
			});
		}
	}
}); 


/* ******************************************************************************* 

	FIXED ROWS

********************************************************************************** */  

//RT Fixed Rows  
(function($){
    $.fn.rt_fixed_rows = function(options) {
    var settings = $.extend({}, $.fn.rt_fixed_rows.defaults, options);
 	var fixed_rows = $(this);
	var rowID =	Math.ceil(Math.random()*2000);
 
		fixed_rows.each(function(){ 
			var current_row = jQuery(this);
			var max_box_height = 0;

			current_row.addClass('dynamic-fixedRow-'+rowID+''); 
			jQuery(this).find('.box').each(function(){	  

				if(jQuery(this).hasClass("one") == false && jQuery(this).hasClass("fullwidth") == false ){
					if(jQuery(this).height()	> max_box_height){
						max_box_height = jQuery(this).height();
					} 
				}
			});
			jQuery('div.dynamic-fixedRow-'+rowID+' > .box').css({'min-height':max_box_height});

			rowID++;

		});  
	}; 
})(jQuery);

jQuery(window).load(function() { 
    jQuery('#container .fixed-row').rt_fixed_rows();
}); 
 


/* ******************************************************************************* 

	SORTABLE PORTFOLIO 

********************************************************************************** */  
//RT Sort Columns
(function($){
    $.fn.rt_sort_columns = function(options) {
		var settings = $.extend({}, $.fn.rt_sort_columns.defaults, options);
		 
		//default settings
		settings = $.extend({
		    navigation: "" // sort navigation class name classname
		}, options);				
		 
		var $container = $(this);   
		var $navigation = $("body ."+settings.navigation+"");

		$navigation.find('li a').click(function(){
		  var selector = $(this).attr('data-filter'); 

		  	//remove active class
		  	$navigation.find('li').each(function(){
		  		if($(this).hasClass("active")){
		  			$(this).removeClass('active');
		  		} 
		  	});

		  	//add active class
		  	$(this).parent('li').addClass('active'); 

		  	//filter
		  	$container.find("div.box").each(function(){
		  		jQuery(this).animate({'opacity':'0.2'},300,'easeOutBack'); 
		  		jQuery(this).removeClass("filtered"); 
			});

		  	$container.find("div.box."+selector).each(function(){ 
		  		jQuery(this).animate({'opacity':'1'},300,'easeOutBack');
		  		jQuery(this).addClass("filtered"); 
			});

			//filter icon
			$navigation.find('li.sort_icon').addClass("filtered").animate({'opacity':'0.4'},300,'easeOutBack'); 

			//scroll
			$('html, body').animate({ scrollTop: $navigation.offset().top-20}, 300); 
		}); 

		$navigation.find('li.sort_icon').click(function(){
			$(this).removeClass("filtered").animate({'opacity':'1'},300,'easeOutBack'); 
			$navigation.find('li.active').removeClass('active');
		  	
		  	//remove filter
		  	$container.find("div.box").each(function(){ 
		  		jQuery(this).animate({'opacity':'1'},300,'easeOutBack');
		  		jQuery(this).addClass("filtered"); 
			});

		});		

		return false;
	}; 
})(jQuery);
 
 //Portfolio Sortables
jQuery(window).load(function() {
	jQuery("#portfolio_sortables").rt_sort_columns({navigation:"portfolio_sortables"});
});



/* ******************************************************************************* 

	JPLAYER ADDON

********************************************************************************** */  
jQuery(document).ready(function($){
	//hide page scroll		
	$('.jp-full-screen').click(function() {
		jQuery("html").css({"overflow":"hidden"});
		jQuery(".social_media_icons").css({"display":"none"});
	});

	$('.jp-restore-screen').click(function() {
	    jQuery("html").css({"overflow":"scroll"});
		jQuery(".social_media_icons").css({"display":"block"});
	});

	//hide gui
	$("div.jp-container").hover(function(){
		if($(this).find(".jp-audio-container").hasClass("noposter")===false && $(this).find(".jp-gui").hasClass("noposter")===false) {
			$(this).find('.jp-gui, .jp-audio-container').stop().css({display:"block"}).animate({opacity:"1"},500);
		}
	},function(){	
		if($(this).find(".jp-audio-container").hasClass("noposter")===false && $(this).find(".jp-gui").hasClass("noposter")===false) {
			$(this).find('.jp-gui, .jp-audio-container').stop().delay(600).css({display:"block"}).animate({opacity:"0"},500);
		}
	});   
}); 



/* ******************************************************************************* 

	Carousel for product images

********************************************************************************** */  
jQuery(window).load(function() {
    if (jQuery('#product_thumbnails').length>0){
	   jQuery('#product_thumbnails').jcarousel({scroll: 1});
    }
}); 


/* ******************************************************************************* 

	THUMBNAIL EFFECT

********************************************************************************** */  
(function($){
    $.fn.rt_portfolio_effect = function(options) {
    var settings = $.extend({}, $.fn.rt_portfolio_effect.defaults, options);
 
			var portfolio_item=$(this);  
			 		
			portfolio_item.each(function(){
				var imageClass = jQuery(this).attr("class"); // get the class 
				var theImage = jQuery(this).html(); 		// save the image
				jQuery(this).find("img").addClass("active"); // mark image as active
				jQuery(this).append('<span class="imagemask">'+theImage+'<span class="icon-overlay"><span class="icon '+imageClass+'"></span></span></span>'); //create new image within span
			}); 
			jQuery('a.imgeffect .active').remove(); // remove duplicated images	
			
			//the effect
			portfolio_item.mouseover(function(){ 
				jQuery(this).find('span.icon-overlay').stop().animate({ opacity:"1"}, 300).find('.icon').stop().animate({ top:"50%"}, 300, "easeOutBack");  
		 
			}).mouseout(function(){
				jQuery(this).find('span.icon-overlay').stop().animate({ opacity:"0"}, 300);  
				jQuery(this).find('span.icon-overlay .icon').stop().animate({ top:"-60px"}, 300, "easeInBack");  
			});    			 
	}; 
})(jQuery);

jQuery(window).load(function() {
    jQuery('a.imgeffect').rt_portfolio_effect();
});
 


/* ******************************************************************************* 

	Mobile Navigation  

********************************************************************************** */  
jQuery(document).ready(function($){
	var mobile_navigation = $('#mobile_navigation'); 
	$(mobile_navigation).on("change", function(event){    
		var theURL = $(this).selected().val(); 
		if( theURL != "" || theURL != "#"  ) window.location.href = theURL;
		else return false; 
	}); 
});



/* ******************************************************************************* 

	jQuery browser function from old versions  - DO NOT DELETE 

********************************************************************************** */  
jQuery.uaMatch = function( ua ) {
ua = ua.toLowerCase();

var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
/(msie) ([\w.]+)/.exec( ua ) ||
ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
[];

return {
browser: match[ 1 ] || "",
version: match[ 2 ] || "0"
};
};

matched = jQuery.uaMatch( navigator.userAgent );
browser = {};

if ( matched.browser ) {
browser[ matched.browser ] = true;
browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
browser.webkit = true;
} else if ( browser.webkit ) {
browser.safari = true;
}

jQuery.browser = browser;