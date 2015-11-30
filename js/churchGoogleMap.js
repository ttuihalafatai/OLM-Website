function initializeMap() {
    var mapCanvas = document.getElementById('churchGoogleMap');
    var latLng = new google.maps.LatLng(21.3458, -157.860797);
    var mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        mapTypeControl: false
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'Our Lady of the Mount Church'
    });
}

window.onload = initializeMap;
