"use strict";

var APPID;
var output;

$.ajax({
    url: 'keys.txt',
    type: 'GET',
    success: function (data) {
        APPID = data;
        getWeather();
    }
});




function getWeather () {
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=APPID=' + APPID,
        type: 'POST',
        success: function (data) {
            output = data;
            console.log(output);
            displayWeather(output);
        }

    })
};

function displayWeather (output) {
    console.log('Location: ' + output.name);
    console.log('Humidity: ' + output.main.humidity);
    console.log('Temp: ' + output.main.temp);
    console.log('Pressure: ' + output.main.pressure);
    console.log('Weather: ' + output.weather[0].main);
    console.log('Description: ' + output.weather[0].description);
    $('span.location').html(output.name);
    $('span.humidity').html(output.main.humidity);
    $('span.temperature').html(output.main.temp);
    $('span.pressure').html(output.main.pressure);
    $('span.weather').html(output.weather[0].main);
    $('span.description').html(output.weather[0].description);
    var iconURL = 'url("' + 'http://openweathermap.org/img/w/' + output.weather[0].icon + '.png")';
    console.log(iconURL);
    $('#weatherIcon').css("backgroundImage",iconURL);




}


var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude: ' + parseInt(crd.latitude));

  console.log('Longitude: ' +parseInt(crd.longitude));
  console.log('More or less ${crd.accuracy} meters.');
};

function error(err) {
  console.warn('ERROR(${err.code}): ${err.message}');
};

navigator.geolocation.getCurrentPosition(success, error, options);

var testsubject = {
    lat: 20,
    long: 20
}

var testoutput = $.param(testsubject);
console.log("JQuery Param: " + testoutput);