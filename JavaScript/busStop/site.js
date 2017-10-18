"use strict";
let myAPPID; // Stores the API Key for trimet.


fetchKey(); //Makes AJAX call to local file for secret API key and then calls getCurrentPosition
//and getTrimetStopsByLocation to start script.





function fetchKey () {$.ajax({
    url: 'trimetkey.txt',
    type: 'GET',
    success: function (data) {
        myAPPID = data;
        navigator.geolocation.getCurrentPosition(getTrimetStopsByLocation);
    }
})}

/*
This function queries the Trimet API for stop locations. API key is filled from global.


Arg: location object pulled from browser

*/

function getTrimetStopsByLocation (data) {

    let trimetdata = {
        appID: myAPPID,
        json: true,
        ll:'45.496673,-122.622570' //data.coords.latitude + ',' + data.coords.longitude
    };

    $.ajax({
        url: 'http://developer.trimet.org/ws/V1/stops',
        type: 'GET',
        data: trimetdata,
        success: parseTrimetResults
    })
}

function parseTrimetResults (ee) {
            const results = ee.resultSet.location;
            console.log("Results: " + results);
            console.table(results);
            console.table(results[0]);
            results.forEach(function (i) {
                console.log("Desc: " + i.desc);
                console.log("Dir: " + i.dir);
                console.log("Lat: " + i.lat);
                console.log("Long: " + i.lng);
                console.log("Locid: " + i.locid);
                populateStopList(i);
            })

}

function populateStopList (stop) {
    const listNode = document.querySelector('#stoplist');
    const newNode = document.createElement('li');
    const newContent = document.createTextNode(stop.desc);
    listNode.appendChild(newNode);
    newNode.appendChild(newContent);
}



