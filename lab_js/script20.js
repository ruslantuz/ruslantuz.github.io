var canvas=document.getElementById("draw");
var x=canvas.getContext("2d");

// Прямокутник
x.fillStyle = "rgb(170,255,180)";
x.fillRect(10,10,480,280);

// Трикутник
x.beginPath();
x.moveTo(100,20);
x.lineTo(210,240);
x.lineTo(30,160);
x.closePath();
x.lineWidth = 3;
x.stroke();

// Квадратична крива
x.beginPath();
x.moveTo(310,100);
x.quadraticCurveTo(380,50,460,210);
x.strokeStyle="red"; 
x.setLineDash([5,5]);
x.stroke();

// Кубічна крива
x.moveTo(460,210);
x.bezierCurveTo(410,220,340,150, 250,210);
x.stroke();

// Текст
x.font='22px Impact';
x.fillStyle='#65036c';
x.fillText("Виконав",210,40); 

// Геолокація
var lat = document.getElementById("latitude");
var long = document.getElementById("longitude");

function printGeo(geo){
    lat.textContent = "Широта: " + geo.coords.latitude;
    long.textContent = "Довгота: " + geo.coords.longitude;
}
function failGeo(err){
    lat.textContent = "Помилка: " + err.message;
}

var options = {
 enableHighAccuracy: true};

navigator.geolocation.getCurrentPosition(printGeo, failGeo, options);

// Таймер
var title = document.getElementById("title");
var rgb = 0;
title.style.color = `rgb(${rgb},${rgb},${rgb})`;

function colorChange(){
    rgb += 1;
    title.style.color = `rgb(${rgb},${rgb},${rgb})`;
    if (rgb == 255){
        rgb = 0;
    }
}

setInterval(colorChange, 50);