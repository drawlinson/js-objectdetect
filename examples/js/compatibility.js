/**
 * @namespace Allows access to webRTC and other features for browsers that are
 * not conforming to the latest standard (yet). Supported Browsers are: 
 * Chrome, Opera and Firefox (soon).
 */
var compatibility = (function() {
	var lastTime = 0,
	
		URL = window.URL || window.webkitURL,
	
		requestAnimationFrame = function(callback, element) {
/*			var requestAnimationFrame =
				window.requestAnimationFrame;

/*		|| 
				window.webkitRequestAnimationFrame	|| 
				window.mozRequestAnimationFrame		|| 
				window.oRequestAnimationFrame		||
				function(callback, element) {
		            var currTime = new Date().getTime();
		            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		            var id = window.setTimeout(function() {
		            	callback(currTime + timeToCall);
		            }, timeToCall);
		            lastTime = currTime + timeToCall;
		            return id;
		        };
	*/
//			return requestAnimationFrame.call(window, callback, element);
window.requestAnimationFrame( callback, element);
		},
		
		getUserMedia = function(options, success, error) {

navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia || 
                            navigator.msGetUserMedia);
			return getUserMedia.call(window.navigator, options, success, error);

//			var getUserMedia = navigator.mediaDevices.getUserMedia;
//			return getUserMedia.call( options, success, error );
			//var getUserMedia = navigator.mediaDevices.getUserMedia( options, success, error );;
			//return getUserMedia.call( options, success, error );
//                        return navigator.mediaDevices.getUserMedia( options, success, error );

/*				navigator.mediaDevices.getUserMedia ||
				window.navigator.getUserMedia ||
				window.navigator.mozGetUserMedia ||
				window.navigator.webkitGetUserMedia ||
				function(options, success, error) {
					error();
				};
			
			return getUserMedia.call(window.navigator, options, success, error);*/
		};

	return {
		URL: URL,
		requestAnimationFrame: requestAnimationFrame,
		getUserMedia: getUserMedia
	};
})();
