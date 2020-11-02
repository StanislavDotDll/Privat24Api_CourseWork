
//google maps/////////////////////////////////////////////////////////////
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
  });

  addMarker(rivne, map);
}


function myFunction(arr) {
  var out = "";
  var i;
  for (i = 0; i < arr.length; i++) {
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




//privat24//////////////////////////////////////////////////////

var xhr = new XMLHttpRequest();

xhr.open('GET', 'infrastructure.json', false);

xhr.send();



var arr = JSON.parse(xhr.response).devices;
console.log(arr[7247].cityUA);






//Search//////////////////////////////////////////////////////
function search() {
  let FindText=document.getElementById('searchText').value;
  if (FindText == "") {
    alert("Enter city name (UA/RU/EN)");
  } else {
    document.getElementById("ATMs").innerHTML="";
    arr.forEach(function (item, i, arr)
    {
       if(item.cityUA==FindText||item.cityRU==FindText||item.cityEN==FindText)
       {
         console.log(item);

         var atm=document.createElement("div");
         atm.className="Atm";
         atm.innerHTML=item.fullAddressUa;
         document.getElementById("CityName").innerHTML=item.cityUA+":";
         document.getElementById("ATMs").appendChild(atm);
       }
    });
  }

};




