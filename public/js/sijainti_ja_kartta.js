var latitude = 0;
var longitude = 0;
var olet_tassa;
var kartta;

async function getData() {
  const response = await fetch('/api/paikat');
  const data = await response.json();
  console.log(data);
}

if ("geolocation" in navigator) {
  console.log("Sijaintitieto saatavilla");
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);

    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    console.log('latitude: ' + latitude);
    console.log('longitude: ' + longitude);

    document.getElementById("pituusasteet").innerHTML = latitude;
    document.getElementById("leveysasteet").innerHTML = longitude;

    kartta = L.map('kartta').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(kartta);

    var marker = L.marker([latitude, longitude]).addTo(kartta);
    getData();
  });
} else {
  console.log("Sijaintitiedot ei saatavilla");
}

function avaa_paikkatietolomake() {
  document.getElementById("paikkatietolomake").style.display = "block";
  document.getElementById("lomake").reset();
}

function sulje_paikkatietolomake() {
  document.getElementById("paikkatietolomake").style.display = "none";
}

function laheta_arvostelu() {
  var paikka = document.getElementById("paikka").value;
  var arvostelu = document.getElementById("arvostelu").value;

  console.log("Paikka: " + paikka);
  console.log("Arvostelu: " + arvostelu);
}
