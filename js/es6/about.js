function initMap() {
        // Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: {lat: 43.1035263, lng: 131.8942434},
	  zoom: 8
	});
}