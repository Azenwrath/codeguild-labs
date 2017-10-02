"use strict";

var myScore;

function startGame() {
    myScore = new component();

    myGameArea.start();
}

function component() {
    // this.type = type;
    // this.width = width;
    // this.height = height;
    // this.x = x;
    // this.y = y;
    this.score = 0;
    // this.update = function () {
    //     var ctx = myGameArea.context;
    //     if (this.type == "text") {
    //         ctx.font = this.width + " " + this.height;
    //         ctx.fillStyle = color;
    //         ctx.fillText(this.text, this.x, this.y);
    //     }
    // }
}

var myGameArea = {
    // canvas: document.createElement('canvas'),
    start: function () {
        // this.canvas.width = 1024;
        // this.canvas.height = 270;
        // this.context = this.canvas.getContext("2d");
        // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);


    },
    // clear: function () {
    //     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }



function updateGameArea() {
    // myGameArea.clear();
    myGameArea.frameNo += 1;
    myScore.score += 1;

    myScore.text = "SCORE: " + myScore.score;
    document.getElementById('currentScore').innerHTML = "Score: " + myScore.score;
    // myScore.update();
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue +";" + expires + ';path=/';
    console.log(cname + "=" + cvalue +";" + expires + ';path=/')
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.getElementById("saveCookies").addEventListener('click', function (e) {

    setCookie("testscore", myScore.score, 24);

});

document.getElementById('loadCookies').addEventListener('click', function (e) {

    console.log(getCookie("testscore"));
    myScore.score = Number((getCookie("testscore")));
    document.getElementById('currentScore').innerHTML = "Scorte: "
})

