"use strict";
var currentSpeed = 50; // Current magic default for speed counter. Will reset to zero with every mole placement.
var speed = 20; // //Target speed for mole placement. A smaller number is faster.
var holes = []; // Array of Ids for tiles containing a hole. Length is used to check win condition.
var moles = []; // Array of Ids for tiles containing a mole.
var index; // Holds Id for tile being populated by placeMole. It is not actually the index.
var score = 0; //Updated through updateScore()


for (var i = 0; i < 20; i++) { // Generates to match div ids. TODO: Remove magic numbers
    holes.push(i + 1);
}

var timerStart = function () {
    /*
    Starts interval timer that will:
    1. Check for failure state and stop timer.
    2. Place a mole if currentSpeed is greater than target speed.
    3. Decrement target speed for faster generation if a mole is placed.
    4. Reset currentSpeed is a mole is placed
     */
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
            // console.log("Current Speed: " + currentSpeed + " Speed: " + speed);
        }
    }, 200); // Interval
};


$('.start-btn').click(timerStart()); // Starts timer when button is pressed. TODO: Move the timer back inside the start button

function placeMole() {
    /*
    1. Shuffles the array of current open tiles.
    2. Pops the top tile.
    3. Pushes the tile to the occupied tile list.
    4. changes the image on the tile.
     */
    holes = _.shuffle(holes); // Shuffle the array of empty tiles.
    index = holes.pop(); // Saves the empty tiles value and removes from empty list.
    moles.push(index); // Adds the tile id to the occupied list
    $('#' + index).css("backgroundImage", "url('mole.jpg')"); // Changes the image on the tile to reflect occupied state.

};

$('.tile').click(function () {

        if ($(this).css("backgroundImage").match(/mole.jpg/)) { // Checks for mole.
            $(this).css("backgroundImage", "url('hole.jpg')"); // Changes the mole back to a hole.
            // console.log("Accessing id " + this.id);
            moles.splice(this.id, 1); // removes tile from occupied list.
            holes.push(this.id); // Puts tile back in unoccupied list.
            updateScore(500); // Adds points to score
        } else {
            updateScore(-50); // Decrements score upon failed to find a mole.
        }
    }
);

function updateScore(num) { // Update the score for the player
    score += num;
    console.log("changed score");
    $('#scorebox').html("Score: " + score);
}
