$(document).ready(function () {
  console.log('document ready');
  function initializeMap() {
    console.log('initialize');
    var myOptions = {
      center: new google.maps.LatLng(51.90584, -2.88511),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
  }
  initializeMap();
});


