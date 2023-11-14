document.addEventListener('DOMContentLoaded', getMyLocation);
let watchId = null;


let ourCoords = {
    latitude: 48.94321,
    longitude: 24.73380
};  
let previousCoords = null;
let map;
let markers = []; 

function getMyLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
        var watchButton = document.getElementById('watch');
        watchButton.onclick = watchLocation;
        var clearWatchButton = document.getElementById('clearWatch');
        clearWatchButton.onclick = clearWatch;

        document.getElementById('destinationLat').value = ourCoords.latitude;
        document.getElementById('destinationLng').value = ourCoords.longitude;

        document.getElementById('setDestination').addEventListener('click', setDestination);

        document.getElementById('scrollToDestination').addEventListener('click', scrollToDestination);
    }
    else{
        alert ("Oops, no geolocation support");
    }
}

function displayLocation(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    if (!previousCoords || previousCoords.latitude !== latitude || previousCoords.longitude !== longitude) {
        let div = document.getElementById("location");
        div.innerHTML = `You are at Latitude: ${latitude}, Longitude: ${longitude}`;
        div.innerHTML += `(with ${position.coords.accuracy} meters accuracy)`;

        updateMap(latitude, longitude);

        displayDistance(position.coords, ourCoords);


        addMarkerWithInfo(latitude, longitude, new Date(position.timestamp));

        previousCoords = {
            latitude: latitude,
            longitude: longitude
        };
    }
}

function displayError(error){
    const errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    }
    let errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2){
        errorMessage = errorMessage + " " + error.message;
    }
    let div = document.getElementById("location");
    div.innerHTML = errorMessage;
}


function updateMap(latitude, longitude) {
    if (!map) {
        map = L.map('map').setView([latitude, longitude], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    } 
    L.marker([latitude, longitude]).addTo(map);
}


function addMarkerWithInfo(latitude, longitude, timestamp) {
    const popupContent = `Latitude: ${latitude}<br>Longitude: ${longitude}<br>Time: ${timestamp.toLocaleString("uk-UK")}`;
    const marker = L.marker([latitude, longitude]).bindPopup(popupContent);

    marker.addTo(map);
    markers.push(marker);
}

function setDestination() {
    const destinationLat = parseFloat(document.getElementById('destinationLat').value);
    const destinationLng = parseFloat(document.getElementById('destinationLng').value);

    ourCoords = {
        latitude: destinationLat,
        longitude: destinationLng
    };

    displayDistance(previousCoords, ourCoords);
    
    updateMap(destinationLat, destinationLng);

    addMarkerWithInfo(destinationLat, destinationLng, new Date());
}

function scrollToDestination() {
    const destinationLat = parseFloat(document.getElementById('destinationLat').value);
    const destinationLng = parseFloat(document.getElementById('destinationLng').value);

    map.setView([destinationLat, destinationLng], 15);
}

function displayDistance(startCoords, destCoords) {
    let km = computeDistance(startCoords, destCoords);
    let distance = document.getElementById("distance");
    distance.innerHTML = `You are ${km.toFixed(2)} km from the College`;
}

function computeDistance(startCoords, destCoords){
    let startLatRads = degreesToRadians(startCoords.latitude);
    let startLongRads = degreesToRadians(startCoords.longitude);
    let destLatRads = degreesToRadians(destCoords.latitude);
    let destLongRads = degreesToRadians(destCoords.longitude);
    let Radius = 6371; // вказаний радіус землі у км
    let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) *
    Math.cos(startLongRads - destLongRads)) * Radius;
    return distance;
}
function degreesToRadians(degrees) {
    let radians = (degrees * Math.PI)/180;
    return radians;
}


function watchLocation(){
    watchId = navigator.geolocation.watchPosition(displayLocation,displayError);    
}

function clearWatch(){
    if(watchId){
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}