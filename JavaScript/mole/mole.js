"use strict";
var currentSpeed = 50;
var speed = 20; // Starting interval for mole placement in milliseconds
var holes = []; // Array of Ids for tiles containing a hole. Length is used to check win condition.
var moles = []; // Array of Ids for tiles containing a mole.
var molecrawl = 1; // Iterator for non-random mole fill in testing
var index;
var score = 0;



for (var i = 0; i < 20; i++) {
    holes.push(i + 1);
}

var timerStart = function () {
    var timer = setInterval(function () {


        if (currentSpeed >= speed) {


            if (holes.length === 0) {
                alert("you lost");
                clearInterval(timer);
            } else {
                // $('#' + molecrawl).css("backgroundImage", "url('mole.jpg')");
                // molecrawl++;
                placeMole();
                currentSpeed = 0;
                speed--;
            }
        } else {
            currentSpeed += 10;
            console.log("Current Speed: " + currentSpeed + " Speed: " + speed);
        }
    }, 200);


};





$('.start-btn').click(timerStart());



function placeMole() {
    // var index = Math.floor((Math.random() * holes.length) + 1);
    holes = _.shuffle(holes);
    // console.log("Attempting to place Mole at index" + index);
    index = holes.pop();
    // console.log("Holes minus Splice: " + holes);
    moles.push(index);
    // console.log("Moles + splice");

    $('#' + index).css("backgroundImage", "url('mole.jpg')");

};

$('.tile').click(function () {

        if ($(this).css("backgroundImage").match(/mole.jpg/)) {
            $(this).css("backgroundImage", "url('hole.jpg')");
            console.log("Accessing id " + this.id);
            moles.splice(this.id, 1);
            holes.push(this.id);
            updateScore(500);
        } else {
            updateScore(-50);
        }
    }
);

function updateScore(num) {
    score += num;
    console.log("changed score");
    $('#scorebox').html("Score: " + score);
}

console.log("Initial Holes: " + holes);