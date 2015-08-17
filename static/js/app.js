$(document).ready(function(){
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var LatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	    	var mapOptions = {
	    		center: LatLng,
	    		image: 'img/marker.png',
				scrollwheel: false,	
				styles: [{"featureType":"all","elementType":"all","stylers":[{"hue":"#ffbb00"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"hue":"#ffbb00"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"hue":"#ffbb00"}]}],
				zoom: 15,
	    	};
	    	var map = new google.maps.Map(document.getElementById('map'), mapOptions);

	    	var marker = new google.maps.Marker({
	    		position: LatLng,
	    		map: map,
	    		icon: mapOptions.image,
	    	});

	    });
	}
});