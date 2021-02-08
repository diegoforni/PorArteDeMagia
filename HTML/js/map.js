function iniciarMap(){
    var coord = {lat:-32.884342 ,lng: -68.845763};
    var coord2 = {lat:-34.620401 ,lng: -58.423825};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 5,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map

    });
    var marker2 = new google.maps.Marker({
        position: coord2,
        map: map
  
      });
}