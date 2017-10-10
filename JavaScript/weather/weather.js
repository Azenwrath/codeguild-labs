"use strict";

var myAPPID;
var city;


function fetchKey () {$.ajax({
    url: 'keys.txt',
    type: 'GET',
    success: function (data) {
        myAPPID = data;
        navigator.geolocation.getCurrentPosition(getWeatherByLocation);
    }
})};


function getWeatherByLocation (pos) {

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        data: {
            APPID: myAPPID,
            lat: pos.coords.latitude,
            lon: pos.coords.longitude


        },
        type: 'GET',
        success: displayWeather
    })
};

function getWeatherByCity (city) {

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        data: {
            APPID: myAPPID,
            q: city


        },
        type: 'GET',
        success: displayWeather
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



//Where the magic happens
fetchKey();

$('#locationBtn').click(function () {
    city = $('#locationText').val();
    console.log(city);
    getWeatherByCity(city)
})







