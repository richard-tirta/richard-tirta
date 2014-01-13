
RT.VIEWS.MAIN = (function(window){

	var main = {};

	main.preload = function(){

		function loadModule(el, content){
			var ajaxLoad = "<h1 class='loading' >NOW LOADING</h1";
			$(el).append(ajaxLoad);
			$(el).load(content, function(){
				$(".loading").remove();
			});
		}

		$.ajaxSetup({
			cache: false
		});

		$("#graphic-design-load").appear(function(){
			loadModule(this, "app/graphic-design.html");
		});

		$("#web-interactive-load").appear(function(){
			loadModule(this, "app/web-interactive.html")
		});

		$("#motion-audio-load").appear(function(){
			loadModule(this, "app/motion-audio.html")
		});

		$("#photography-load").appear(function(){
			loadModule(this, "app/photography.html")
		});
	}

	main.thumbSlide = function(){

		function imageFade (node) {
			$(node).fadeIn(500);
			$(".loading_image").remove();	
		};

		function onThumbClick(node, content){

			e.preventDefault();

			$(node).append("<p class='right loading_image' >NOW LOADING</p>");	

			$(".gallery_image").html("").fadeOut(200,function() {
				$(".gallery_image").append(content).imagesLoaded( imageFade(node) );
			});
		}

		$( ".gallery_thumbs>li>a" ).click( function ( e ) {

			var url = $( this ).attr( "href" ); 
			var img = $("<img />").attr('src', url);

			onThumbClick(this, img);
				
		});

		$( ".video_thumbs>li>a" ).click( function ( e ) {

			var url = $( this ).attr( "href" ); 
			var vid = $("<iframe />").attr({src: url, width: '940', height: '540',});

			onThumbClick(this, vid);
		});
	}

	main.accordion = function(){
		$('.closed_txt').click( function(d){	
			// siblings() targets all siblings of the target. 
			// use slideUp() to close all of these.
			d.preventDefault(); 
			$(this).toggleClass('closed').next('#jtext').slideToggle().siblings('#jtext').slideUp();
			$(this).siblings('.closed_text').removeClass('closed');
		});

		$('#about #jtext:gt(0)').slideUp();

		
	}

	main.pageNav = function(){

		$('#nav').onePageNav({
			begin: function(){
				//Hack so you can click other menu items after the initial click
				$('body').append('<div id="device-dummy" style="height: 100px;"></div>');
			},
			end: function() {
				$('#device-dummy').remove();
			}
		});
	
	}

	$(document).ready(function(){
		main.preload();
		main.thumbSlide();
		main.accordion();
		main.pageNav();
	});

	return main;

}(window));
	
	
