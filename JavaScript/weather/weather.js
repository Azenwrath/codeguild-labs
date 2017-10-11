"use strict";
var myAPPID;


function fetchKey () {$.ajax({
    url: 'keys.txt',
    type: 'GET',
    success: function (data) {
        myAPPID = data;
        navigator.geolocation.getCurrentPosition(getWeatherByLocation);
    }
})}


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
}

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
}

function displayWeather (output) {
    $('span.location').html(output.name);
    $('span.humidity').html(output.main.humidity);
    $('span.temperature').html(output.main.temp);
    $('span.pressure').html(output.main.pressure);
    $('span.weather').html(output.weather[0].main);
    $('span.description').html(output.weather[0].description);
    var iconURL = 'url("' + 'http://openweathermap.org/img/w/' + output.weather[0].icon + '.png")';
    $('#weatherIcon').css("backgroundImage",iconURL);
}


$('#locationBtn').click(function () {
    var city = $('#locationText').val();
    console.log(city);
    getWeatherByCity(city)
});


//Where the magic happens
fetchKey();




