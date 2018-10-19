/*

  _____  _____  _     _  ______ __   _ _______ __   __
    |   |     | |     | |_____/ | \  | |______   \_/
  __|   |_____| |_____| |    \_ |  \_| |______    |

	Morteza H. Golkar
	2018

*/

var debug_mode = !true;
var x, xo;

document.addEventListener("DOMContentLoaded", function() {

	//====================
	// 			X & XO
	//====================
	// Just some helper functions for easier access to elements & templating
	x = function(){
		if( typeof arguments[0] == "string"){
			var q = document.querySelectorAll( arguments[0] );
			var x = ( q.length > 1 ) ? q : ( q[0] || document.getElementById( arguments[0] ) );
			if( arguments[1] !== undefined ) x.innerHTML = arguments[1];
			return x;
		} else return undefined;
	};
	xo = function(o){
		var keys = Object.keys( o );
		for(y = 0; y < keys.length; y++){
			x(keys[y], o[ keys[y] ]);
		}
	};

	// loading font
	if( debug_mode != true ){
		var google_font = new FontFace('Lato', 'url(https://fonts.googleapis.com/css?family=Lato:300,400,700)');
		google_font.load().then( function(loaded_face) {
		// loaded_face holds the loaded FontFace
			set_progress(progress + 10);
			console.log('google font loaded!');
		}).catch( function(error) {
		// error occurred
			var local_font = new FontFace('Lato', 'url("./resources/lato/lato-fonts.css")');
			local_font.load().then( function(loaded_face) {
				set_progress(progress + 10);
				console.log('local font loaded!');
			}).catch( function(error){
				console.log('No Font Face! ', error);
			});
		});
	}

	var video_fullscreen = function(elem){
		var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
		(document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
		(document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
		(document.msFullscreenElement && document.msFullscreenElement !== null);
		if (!isInFullScreen && elem !== false) {
		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullScreen) {
		  elem.webkitRequestFullScreen();
		} else if (elem.msRequestFullscreen) {
		  elem.msRequestFullscreen();
		}
		} else {
		if (document.exitFullscreen) {
		  document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
		  document.webkitExitFullscreen();
		} else if (document.mozCancelFullScreen) {
		  document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
		  document.msExitFullscreen();
		}
		}
	};

	// zoom for resource manager image
	x('#res-man .zoom-button').addEventListener('click', function(e) { e.stopPropagation(); video_fullscreen(e.target.parentNode.getElementsByTagName('img')[0]); });
	x('#res-man img').addEventListener('click', function(e) { video_fullscreen(false); });

	// Play videos after loading the rest of the page and adds a zomm-button to each
	var videos = x("video");
	if( typeof x('video')[0] == 'object' ){
		for(var v = 0; v < videos.length; v++){
			videos[v].play();
			let zoom = document.createElement("div");
			zoom.className = 'zoom-button';
			zoom.addEventListener('click', function(e) {
				e.stopPropagation();
				video_fullscreen(e.target.parentNode.getElementsByTagName('video')[0]);
			});
			videos[v].parentNode.appendChild(zoom);
			videos[v].addEventListener('click', function(e){
				e.stopPropagation();
				video_fullscreen(false);
			});
		}
	} else videos.play();


});
