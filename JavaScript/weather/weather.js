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
        url: 'https://api.openweathermap.org/data/2.5/weather?q={Portland}&APPID=' + APPID,
        type: 'POST',
        success: function (data) {
            output = data;
            displayWeather(output);
        }

    })
};

function displayWeather (output) {
    console.log('Location: ' + output.name);
    console.log('Humidity: ' + output.main.humidity);
    console.log('Temp: ' + output.main.temp);

}