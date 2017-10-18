"use strict";
let myAPPID;


function fetchKey () {$.ajax({
    url: 'trimetkey.txt',
    type: 'GET',
    success: function (data) {
        myAPPID = data;
        navigator.geolocation.getCurrentPosition(getTrimetStopsByLocation);
    }
})}



function getTrimetStopsByLocation (data) {
    console.log(data);
    console.log("Lat: " + data.coords.latitude);
    console.log("Lat: " + data.coords.longitude);
    let trimetdata = {
        appID: myAPPID,
        json: true,
        ll: data.coords.latitude + ',' + data.coords.longitude
    };
    console.log(trimetdata);
    $.ajax({
        url: 'http://developer.trimet.org/ws/V1/stops',
        type: 'GET',
        data: trimetdata,
        success: function (ee) {
            console.log(ee)
        },
    })
}

fetchKey();