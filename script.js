//google maps/////////////////////////////////////////////////////////////
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: Zoom,
    center: Center,
  });
  const labels = "";
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  new MarkerClusterer(map, markers, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
var Zoom = 6;
var Center = {
  lat: 49.2,
  lng: 30.5
};
var locations = [{}];

//privat24//////////////////////////////////////////////////////

var xhr = new XMLHttpRequest();
xhr.open('GET', 'infrastructure.json', false); //Можна поміняти на ссилку в любий момент просто під час створення цього коду я не знав як боротися з помилкою CORSE
xhr.send();
var arr = JSON.parse(xhr.response).devices;

//Search//////////////////////////////////////////////////////
function search() {
  let FindText = document.getElementById('searchText').value;
  if (FindText == "") {
    alert("Enter city name (UA/RU/EN)");
  } else {
    document.getElementById("ATMs").innerHTML = "";
    locations = [];
    arr.forEach(function (item, i, arr) {
      if (item.cityUA == FindText || item.cityRU == FindText || item.cityEN == FindText) {
        var loc = {
          lng: parseFloat(item.latitude),
          lat: parseFloat(item.longitude)
        };
        var atm = document.createElement("div");
        atm.className = "Atm";
        atm.id = JSON.stringify(loc);
        atm.innerHTML = "<a onClick=''></a>" + item.fullAddressUa + "</a>";
        document.getElementById("CityName").innerHTML = item.cityUA + ":";
        document.getElementById("ATMs").appendChild(atm);

        locations[i + 1] = loc;
        Center = loc;
        Zoom = 12;
        initMap();
      }
    });

  }
};