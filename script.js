

"use strict";

// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
const labels = "";
let labelIndex = 0;

function initMap() {
  const bangalore = {
    lat: 50.6,
    lng: 26.25,
  };
  const rivne = {
    lat: 48.6,
    lng: 26.25,
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: bangalore,
  }); // This event listener calls addMarker() when the map is clicked.

  addMarker(rivne, map);
} 





function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    console.log(arr)
    out += '<a href="' + arr[i].url + '">' + 
    arr[i].display + '</a><br>';
  }
  document.getElementById("id01").innerHTML = out;
}





function addMarker(location, map) {

  new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map,
  });
 
}