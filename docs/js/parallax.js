var parallaxContainer = document.getElementById('parallax');
var layers = parallaxContainer.children;

var moveLayers = function(e){
		var initialX = (window.innerWidth / 2) - e.pageX;
		 var initialY = (window.innerHeight / 2) - e.pageY;

		 for(var i=0; i<layers.length; i++){
		 	var divider = i/40;
		 	var positionX = initialX * divider;
		 	var positionY = initialY * divider;

		 	var bottomPosition = (window.innerHeight / 2)*divider;

		 	layers[i].style.transform = 'translate('+positionX+'px,'+positionY+'px)';
		 	layers[i].firstElementChild.style.bottom = '-'+'bottomPosition'+'px';
		 }
	}

window.addEventListener('mousemove', moveLayers)