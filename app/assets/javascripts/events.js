$(function(){
  // Note: This example requires that you consent to location sharing when
  // prompted by your browser. If you see a blank space instead of the map, this
  // is probably because you have denied permission for location sharing.

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 6
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);


    // Try HTML5 geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude,
                                         position.coords.longitude);

        marker = new google.maps.Marker({
          position: pos,
          map: map,
          title:"Hello World!"
        });

        map.setCenter(pos);
      }, function() {
        handleNoGeolocation(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }
    
    google.maps.event.addListener(map, 'click', function(event) {
      placeMarker(event.latLng);
    });

    function placeMarker(location) {
      if (marker == 'undefined'){
        marker = new google.maps.Marker({
          position: location,
          map: map
        });
      }
      else{
        marker.setPosition(location);
        $("#event_lat").val(location.lat());
        $("#event_lat").val(location.lng());
      }
    }
  }


  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: new google.maps.LatLng(60, 105),
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});
